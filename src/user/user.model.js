import { Schema, model} from "mongoose"

const userSchema = Schema({
    name:{
        type: String,
        required: [true, "NAME IS REQUIRED"],
        maxLength: [25, "NAME CANNOT EXCEED 25 CHARACTERS"]
    },
    surname:{
        type: String,
        required: [true, "NAME IS REQUIRED"],
        maxLength: [25, "NAME CANNOT EXCEED 25 CHARACTERS"]
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: [true, "EMAIL IS REQUIRED"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "PASSWORD IS REQUIRED"]
    },
    profilePicture:{
        type: String
    },
    phone:{
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true 
    },
    role:{
        type: String,
        required: true,
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    status:{
        type: Boolean,
        default: true
    },
})
userSchema.methods.toJSON = function(){
    const {__v, password, _id, ...usuario} = this.toObject()
    usuario.uid = _id
    return usuario
}
export default model("User", userSchema)