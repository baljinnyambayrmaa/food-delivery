import { Request, Response } from "express"
import { UserModel } from "../../db";
import { compareHash, tokenGenerate } from "../../utils";

const getUserByEmail= async (email: string) => {
    const user=  await UserModel.findOne({email: email});
    return user;
} 

export const loginQuery= async (req: Request, res: Response ) => {

    const {email, password} = req.body;

    const user= await getUserByEmail(email)

    if(!user) {
        throw new Error( "User not found");

    }

    const isPasswordTrue= await compareHash(password, user.password, );

    if(!isPasswordTrue) {
        throw new Error ("wrong Email or Password ")
    }

    const token = await tokenGenerate(user._id.toString());
    return token;

    
}