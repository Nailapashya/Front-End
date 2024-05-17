import { Request, Response, query } from "express"
import * as userService from "../services/userService"
import { errorHandler } from "../utils/errorHandler"
import { userInfo } from "os"

export const findById = async (req: Request, res: Response) => {
    try {
        const followingId = req.params.id
        const userId = res.locals.user;
        const data = await userService.findByid(userId);
        const dataUser =await userService.findByid(userId)

        res.status(200).json(dataUser);
    } catch (error) {
        console.log(error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message
        })
    }
}

export const findByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        const data = await userService.findByName(name)
        const dataUser = await userService.findByName(name)

        res.status(200).json(dataUser);
    }catch (error) {
        console.log(error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message
        })
    }
}

export const getSuggestedUser = async (req: Request, res: Response) => {
    try{
        // const data = await userService.getSuggestedUser()
        const dataUser = await userService.getSuggestedUser(req.query as {limit: string})

        res.status(200).json(dataUser);
    } catch (error) {
        console.log(error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message
        })
    }
}

export const updateUser = async (req: Request, res:Response) => {
    try {

    } catch (error){
        console.log(error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message
        })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { params } = req;
        const { userId } = params;

        const messageDeleteUser = await userService.deleteUser(userId)

        res.status(200).json({ message: messageDeleteUser})

    } catch (error) {
        console.log(error);
        return errorHandler(Error, res);
    }
}













export const createUser = async (req: Request, res: Response) => {
    try {
        const { body } = req;

        const dataInsertUser = await userService.insertUser(body);

        res.status(200).json(dataInsertUser);
    } catch (error) {
        console.log(error);

        const err = error as unknown as Error;

        res.status(500).json({
            message: err.message,
        })
    }
}


export const getSingleUser = async (req: Request, res: Response) => {
    try {
       const { body, params } = req;
       const { userId } = params;
 
       const datagetSingleUser = await userService.getSingleUser(body);
 
       res.status(200).json(datagetSingleUser);
    } catch (error) {
       console.log(error);
 
       const err = error as unknown as Error;
 
       res.status(500).json({
          message: err.message,
       });
    }
 };
 