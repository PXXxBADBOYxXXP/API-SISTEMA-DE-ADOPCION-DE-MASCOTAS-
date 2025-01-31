import {body} from "express-validator";
import {emailExists, usernameExists} from "../helpers/db-validators.js";

export const registerValidator = [
    body("name").not().isEmpty().withMessage("USER IS REQUIRED"),
    body("username").not().isEmpty().withMessage("USERNAME IS REQUIRED"),
    body("email").not().isEmpty().withMessage("USERNAME IS REQUIRED"),
    body("email").not().isEmpty().withMessage("INVALID EMAIL"),
    body("email").custom(emailExists),
    body(username).custom(usernameExists),
    /*
    body
    */
    validarCampos
]