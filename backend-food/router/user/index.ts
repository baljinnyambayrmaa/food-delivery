import { Router } from "express";
import { createUseController, forgotController} from "../../controller";
import { LoginController } from "../../controller";


export const userRouter= Router();

userRouter.post('/signup', createUseController);
userRouter.post('/login',LoginController)
userRouter.post('/forgot', forgotController)

export default userRouter;