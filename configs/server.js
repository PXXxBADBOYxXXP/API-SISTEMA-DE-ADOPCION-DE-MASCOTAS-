"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import {dbConnection} from "./mongo.js"
import authRoutes from "../src/auth/auth.routes.js"
import userRoutes from "../src/user/user.routes.js"
import apiLimiter from "../src/middlewares/validar-cantidad-peticiones.js"

const middlewares = (app) => {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) =>{
    app.use("/adoptionSystem/v1/auth", authRoutes)
    app.use("/adoptionSystem/v1/user", userRoutes)
}

const conectarDB = async () =>{
    try{
        await dbConnection()
    }catch(e){
        console.log(`DATABASE CONNECTION FAILED: ${e}`)
        process.exit(1)    
    }
}


export const initServer = () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`)
    }catch(err){
        console.log(`SERVER INIT FAILED: ${err}`)
    }
}