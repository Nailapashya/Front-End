import { Router } from "express";
import authentication from "../middlewares/authentication";
import uploadMiddleware from "../middlewares/upload";
import { updateProfile, getProfile } from "../controllers/profileController";

const profileRouter = Router();

profileRouter.put("/profile",authentication,uploadMiddleware("cover"),updateProfile);
profileRouter.get("/", authentication, getProfile);
//profileRouter.get("/profile/:id", authentication, getProfile);

export default profileRouter;
