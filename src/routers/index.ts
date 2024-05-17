import { Router } from "express"
import userRouter from "./userRouter"
import authRouter from "./authRouter"
import threadRoute from "./threadRouter";
import profileRouter from "./profileRouter";
import followRouter from "./followRouter";
import likeRouter from "./likeRouter";

const indexRouter = Router()

indexRouter.use("/user", userRouter);
indexRouter.use(authRouter)
indexRouter.use("/threads", threadRoute)
indexRouter.use("/profile", profileRouter)
indexRouter.use("/follow", followRouter)
indexRouter.use(likeRouter)

export default indexRouter