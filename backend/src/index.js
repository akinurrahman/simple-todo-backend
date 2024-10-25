import connectDB from "./db/index.js";
import express from "express"
import dotenv from 'dotenv'

dotenv.config({
    path:"./.env"
})




const app = express()
const port = process.env.PORT || 8000

connectDB().then(()=>{
    app.listen(port, ()=> console.log(`server is running at ${port}`))
})