// require('dotenv').congif({path: './env'})
import dotenv from "dotenv"

// import  mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env. PORT || 8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection !!!", err)
})








/* // 1st appraoch
import express from "express"

const app= express()

(async function connectDB(){
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/$
            {DB_NAME}`)
            app.on("error",(error)=>{
                console.log("ERROr", error);
                throw error
            })

            app.listen(process.env.PORT,()=>{
                console.log(`App is listening on Port ${process.env.PORT}`)
            })
        
    }catch(error){
        console.log("ERROR:", error)
        throw err

    }
})()

connectDB()
*/