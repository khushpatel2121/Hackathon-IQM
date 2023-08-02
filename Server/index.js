import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import authRouter from './Routes/auth.js';
import userRouter from './Routes/users.js';
import bookRouter from './Routes/book.js';
import razorpayRouter from './Routes/Razorpay.js';

const app = express();
dotenv.config();

mongoose.set('strictQuery',false);

const connect = async()=>{
    try{
     await mongoose.connect(process.env.MONGO)
    }catch(error){
      throw(error)
    }
}


mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
});

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/book",bookRouter);
app.use("/api/user",userRouter);
app.use("/api/razorpay",razorpayRouter);


app.use((err , req ,res, next )=>{
    const errorStatus = err.Status || 500;
    const errorMessage = err.Message || "Something went wrong"
    return res.status(500).json({
      success:false,
      status:errorStatus,
      message:errorMessage,
      stack:err.stack,
    });
  });


app.listen(8080,()=>{
    connect();
    console.log("server started at port 8080")
})