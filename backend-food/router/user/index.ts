import { Router } from "express";
import { createUseController } from "../../controller";

export const userRouter= Router();

userRouter.post('/signup', createUseController);


export default userRouter;