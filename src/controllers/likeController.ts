import { Request, Response } from "express"
import db from "../lib/db"
import { User} from "@prisma/client"
import * as likeService from "../services/likeService"
import { errorHandler } from "../utils/errorHandler"

export const getLikes = async (req: Request, res: Response) => {
    try{
        const { threadId } = req.params
        const likes = await likeService.getLikes(threadId)

        return res.json({
            status: true,
            message: "success",
            data: {
                user: likes
            }
        })
    } catch (error) {
        console.log(error)
        return errorHandler(error, res)
    }
}

export const createLike = async (req: Request, res:Response) => {
    try {
        const { threadId } = req.body
        const userId = res.locals.user
        const like = await likeService.createLike({
            threadId,
            userId
        })

        res.json({
            status: true,
            message: "like success",
         });

    } catch (error) {
        console.log(error)
        return errorHandler(error, res)
    }
}

export const getCurrentLike = async (req: Request, res: Response) => {
    try{
        const { threadId } = req.body
        const userId = res.locals.user
        const like = await likeService.getCurrentLike(threadId, userId)
        const totalLike = await db.like.count({
            where:{
                threadId: threadId
            }
        })

        res.json({like, totalLike,});

    } catch (error){
        console.log(error)
        return errorHandler(error, res)
    }
}