import { Response, Request } from "express";
import { createUserQuery } from "../../query";

export const createUseController= async (req:Request, res:Response) => {
    try{    
        const user= await createUserQuery(req);
        res.json(user);

    } catch (error:any) {
        res.send(error.message);
    }
}
