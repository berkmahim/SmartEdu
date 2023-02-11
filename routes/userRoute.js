import express from "express"

import AuthController from "../controllers/AuthController.js"

const router = express.Router()

router.route('/signup').post(AuthController.createUser)  // http://localhost:3000/users/signup
router.route('/login').post(AuthController.loginUser)
router.route('/logout').get(AuthController.logoutUser)




export default router