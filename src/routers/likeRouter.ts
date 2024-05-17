import { Router } from "express";
import authentication from "../middlewares/authentication"
import uploadMiddleware from "../middlewares/upload";
import { createLike, getCurrentLike, getLikes } from "../controllers/likeController";

const likeRouter = Router();

likeRouter.post("/like", authentication, createLike)
likeRouter.get("/like/:threadId", authentication, getCurrentLike)
likeRouter.get("/like/:threadId", authentication, getLikes)

export default likeRouter