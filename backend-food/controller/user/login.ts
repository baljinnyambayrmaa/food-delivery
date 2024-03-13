import { Request, Response } from "express";
import { loginQuery } from "../../query";

export const LoginController = async (req: Request, res: Response ) => {

    try {

        //query login
        const result= await loginQuery(req,res);
        res.send(result);

    } catch (error:any ) {
        res.status(400).send (error.message)
    };

} 