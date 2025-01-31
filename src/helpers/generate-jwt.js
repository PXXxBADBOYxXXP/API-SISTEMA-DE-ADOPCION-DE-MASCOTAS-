import jwt from "jsonwebtoken"

export const generateJWT = (uid = "", email = "") =>{
    return new Promise((resolve, reject) =>{
        const payload = {uid, email}

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: "1h"
            },
            (e, token) =>{
                
            }
        )
        
    })


}