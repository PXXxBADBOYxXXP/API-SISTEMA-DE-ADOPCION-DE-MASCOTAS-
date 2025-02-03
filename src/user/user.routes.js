import { Router } from "express";
import {getUserByID, getUsers, deleteUser, updatePassword} from "./user.controller.js"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator} from "../middlewares/validators.js"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserByID)
router.get("/", getUsers)
router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser)
router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

export default router