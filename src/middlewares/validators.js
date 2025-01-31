import {body} from "express-validator";
import {emailExists, usernameExists} from "../helpers/db-validators.js";
import { validarCampos } from "./validar-campos.js";

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