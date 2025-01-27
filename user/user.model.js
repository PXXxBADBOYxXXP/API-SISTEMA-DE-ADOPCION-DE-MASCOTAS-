import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "NAME IS REQUIRED"]
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
    }
})

export default mongoose.model("User", UserSchema)