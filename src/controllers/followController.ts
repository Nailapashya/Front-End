import { Request, Response} from "express"
import db from "../lib/db"
import * as followService from "../services/followService"

export const follow = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const followingId = req.params.followingId
        console.log(req.params)
        const followerId = res.locals.userId;
        console.log(res.locals)

        const follow = await followService.follow(followerId, followingId)

        res.json({
            success: true,
            message: follow
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            success: false,
            error: error,
         });
    }
}

