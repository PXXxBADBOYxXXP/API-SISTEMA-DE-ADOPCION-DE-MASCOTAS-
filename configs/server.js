"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import {dbConnection} from "./mongo.js"

const configs = (app) => {
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
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
        configs(app)
        conectarDB()
        app.listen(process.env.PORT)
        console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`)
    }catch(err){
        console.log(`SERVER INIT FAILED: ${err}`)
    }
}