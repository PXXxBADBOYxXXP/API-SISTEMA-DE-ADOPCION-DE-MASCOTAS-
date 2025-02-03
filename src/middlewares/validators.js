import {body, check} from "express-validator";
import {emailExists, usernameExists, userExists} from "../helpers/db-validators.js";
import { validarCampos } from "./validar-campos.js";
import { deleteFileOnError } from "./delete-file-on-errors.js";

export const registerValidator = [
    body("name").not().isEmpty().withMessage("USER IS REQUIRED"),
    body("username").not().isEmpty().withMessage("USERNAME IS REQUIRED"),
    body("email").not().isEmpty().withMessage("USERNAME IS REQUIRED"),
    body("email").not().isEmpty().withMessage("INVALID EMAIL"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),
    /*
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    */
    validarCampos
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("INVALID EMAIL"),
    body("username").optional().isString().withMessage("IVALID USERNAME"),
    body("password").isLength({min:8}).withMessage("LA CONTRASEÑA DEBE CONTENER AL MENOS 8 CARACTERES"),
    validarCampos
]

export const getUserByIdValidator = [
    check("uid").isMongoId().withMessage("NO ES UN ID VALIDO"),
    check("uid").custom(userExists),
    validarCampos,
    deleteFileOnError
]

export const deleteUserValidator = [
    check("uid").isMongoId().withMessage("NO ES UN ID VALIDO"),
    check("uid").custom(userExists),
    validarCampos,
    deleteFileOnError
]

export const updatePasswordValidator = [
    check("uid").isMongoId().withMessage("NO ES UN ID VALIDO"),
    check("uid").custom(userExists),
    body("newPassword").isLength({min: 8}).withMessage("EL PASSWORD DEBE CONTENER AL MENOS 8 CARACTERES"),
    validarCampos,
    deleteFileOnError
]