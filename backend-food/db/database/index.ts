import {connect, set} from "mongoose";

const CONNECTION_STRING: string= "mongodb+srv://baljinnyambayrmaa:9w4kTcDupB5h2q1o@cluster0.hclqj8j.mongodb.net/";


export const connectDb = async () => {
    set (`strictQuery`, false);
     
    try {
        await connect (CONNECTION_STRING),
            console.log("Successfully ");
        
    } catch (error) {
        console.log("DB connection is unseccessfull");
    }
}