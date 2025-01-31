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
        throw new Error(`THE EMAIL ${username} IS ALREADY REGISTERED`)
    }
}