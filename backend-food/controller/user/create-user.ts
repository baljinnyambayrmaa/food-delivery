import { Response, Request } from "express";
import { createUSerQuery } from "../../query/user";

export const createUseController= async (req:Request, res:Response) => {
    try{    
        const user= await createUSerQuery(req);
        res.json(user);

    } catch (error:any) {
        res.send(error.message);
    }
}
