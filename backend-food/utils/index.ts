import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const passwordHash = (password: string) => {
    const salt =  bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt );
    return hashedPassword;
};
 export const compareHash= async (password: string, hashedPassword: string) => {
    const isPasswordRight= await bcrypt.compare (password, hashedPassword);
    return isPasswordRight;
 };

 export const tokenGenerate = async (userId: string) => {

    const token =await jwt.sign( {userId}, "secret", {expiresIn: "1d"});
    return token;
 };