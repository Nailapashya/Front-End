import { Router } from "express"
import * as userController from "../controllers/userController"
import authentication from "../middlewares/authentication"

const userRouter = Router();

userRouter.get("/:userId", authentication, userController.findById);
userRouter.get("/:name", authentication, userController.findByName);
userRouter.get("/", authentication, userController.getSuggestedUser)
userRouter.post("/", authentication, userController.createUser);
userRouter.delete("/:userId", authentication, userController.deleteUser);
userRouter.put("/:userId", authentication, userController.updateUser);




userRouter.get("/:", authentication, userController.getSingleUser)

export default userRouter;