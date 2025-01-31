import { Router } from "express";
import { register } from "./auth.controller.js";
import { registerValidator } from "../middlewares/validators.js";
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


export default router