import { hash } from "argon2";
import User from "./user.model.js"

export const getUserByID = async (req, res) =>{
    try{
        const {uid} = req.params;
        const user = await User.findById(uid)

        if(!user){
            return res.status(404).json({
                success: false,
                message: "USUARIO NO ENCONTRADO"
            })
        }

        return res.status(200).json({
            success: true,
            user
        })
        
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "ERROR AL OBTENER EL USUARIO",
            error: err
        })
    }
}

export const getUsers = async (req, res) =>{
    try{
        const {limite = 5, desde = 0} = req.query
        const query = {status: true}
        const [total, users] = await Promise.all([
            User.countDocuments(query),
            User.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            users
        })
    }catch(err){
        return res.status(500).json({
            success: false, 
            message: "ERROR AL OBTENER LOS USUARIOS",
            error: err.message
        })
    }
}

export const deleteUser = async (req, res) =>{
    try{
        const {uid} = req.params
        const user = await User.findByIdAndUpdate(uid, {status:false},{new: true})
        
        return res.status(200).json({
            success: true,
            message: "USUARIO ELIMINADO",
            user
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "ERROR AL ELIMINAR EL USUARIO",
            error: err.message
        })
    }
}

export const updatePassword = async (req, res) =>{
    try{
        const {uid} = req.params
        const {newPassword} = req.body

        const encryptedPassword = await hash(newPassword)
        const user = await User.findByIdAndUpdate(uid,{password: encryptedPassword}, {new: true})
        return res.status(200).json({
            success: false,
            message: "CONTRASEÑA ACTUALIZADA"
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "ERROR AL ACTUALIZAR PASSWORD",
            error: err.message
        })
    }
}