import User from "../user/user.model.js"

export const emailExists = async (email = "") =>{
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`THE EMAIL ${email} IS ALREADY REGISTERED`)
    }
}

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`THE USERNAME ${username} IS ALREADY REGISTERED`)
    }
}

export const userExists = async (uid = "") =>{
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error("NO EXISTE EL USUARIO CON EL ID PROPORCIONADO")
    }
}