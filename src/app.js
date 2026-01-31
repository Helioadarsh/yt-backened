
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app =express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credetials : true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true,list:
    "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes

import userRouter from "./routes/user.routes.js"


//routes declartion
app.use("/api/v1/user", userRouter)


// https:localhost:4000/api/v1/user/register
export {app } 

//thunderclient
