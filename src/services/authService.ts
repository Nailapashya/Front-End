import * as userService from "./userService"
import db from "../lib/db" 
import { Request, Response} from "express"
import { User } from "@prisma/client"
import schemaRegister from "../lib/validation/registerValidation"
import { ERROR_MESSAGE } from "../utils/constant/error"
import bcrypt from "bcrypt"
import loginSchema from "../lib/validation/loginValidation"
import jwt from "jsonwebtoken"

const register = async (body: User): Promise<{id: string}> => {
    const { error, value } = schemaRegister.validate(body);
    if(error?.details) {
        console.log(error);

        throw new Error(ERROR_MESSAGE.WRONG_INPUT);
    } 

    //cek email
    const existEmail = await userService.getSingleUser({
        email: value.email
    })

    if(existEmail) {
        throw new Error (ERROR_MESSAGE.EXISTED_DATA)
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(value.password, 10)

    const user = await userService.insertUser({
        ...value,
        password: hashedPassword,
    })

    return {id: user.id};
}

const login = async (body: User): Promise<{token: string }> => {
    //validasi input
    const { error, value } = loginSchema.validate(body);

    if(error?.details) {
        console.log(error);

        throw new Error (ERROR_MESSAGE.WRONG_INPUT);
    }

    //CHEK EMAIL
    const existEmail = await userService.getSingleUser({
        email: value.email
    })
    if(!existEmail) {
        throw new Error (ERROR_MESSAGE.DATA_NOT_FOUND)
    }

    //CHECK PASSWORD
    const isMatch = await bcrypt.compare(value.password, existEmail.password)
    if(!isMatch) {
        throw new Error(ERROR_MESSAGE.DATA_NOT_FOUND);
    }

    const token = jwt.sign(existEmail, process.env.SECRET_KEY!,{
        expiresIn : "1d"
    })
    return {token};
}

export { register, login}
