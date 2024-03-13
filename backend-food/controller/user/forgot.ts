import { Response, Request } from "express"
import { forgotPasswordQuery } from "../../query";


export const forgotController= async (req:Request, res: Response) => {
    try {
        const result = await forgotPasswordQuery(req);
        res.send(result);
    } catch (error:any){
        res.status(400).send(error.message);
    }
}