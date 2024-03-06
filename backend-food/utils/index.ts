import bcrypt, { hash } from "bcrypt";

export const passwordHash = (password: string) => {
    const salt =  bcrypt.genSaltSync(12);
    const hashedPassword = bcrypt.hashSync(password, salt );
    return hashedPassword;
};
 export const compareHash= async (password: string, hashedPassword: string) => {
    const isPasswordRight= await bcrypt.compare (password, hashedPassword);
    return isPasswordRight;
 }