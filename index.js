import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";
import UserRoutes from "./Router/userRoutes.js";
const app = express();
dotenv.config();
app.use(cors());


app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{
    app.listen(process.env.PORT, ()=>console.log("Your backend has been successfully connected to your database and hosted on that port of", process.env.PORT));
})
.catch((err) =>{
    console.log("Hey there is some issue to connect to your backend to your database and host your server on your given port see the err ", err);
})

app.use("/public", express.static("uploads"));
app.use("/", UserRoutes);