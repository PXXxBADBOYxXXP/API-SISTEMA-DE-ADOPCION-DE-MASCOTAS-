import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { registerValidator, loginValidator } from "../middlewares/validators.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js";

const router = Router()
router.post(
    "/register", 
    uploadProfilePicture.single("profilePicture"),
    registerValidator,
    deleteFileOnError,
    register
    )

    router.post(
        "/Login",
        loginValidator,
        deleteFileOnError,
        login
    )

export default router