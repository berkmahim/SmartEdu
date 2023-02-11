import express from "express"
import AuthController from "../controllers/AuthController.js"
import * as authMiddleware from "../middlewares/authMiddleware.js";


const router = express.Router()

router.route('/signup').post(AuthController.createUser)  // http://localhost:3000/users/signup
router.route('/login').post(AuthController.loginUser)
router.route('/logout').get(AuthController.logoutUser)
router.route('/dashboard').get(authMiddleware.ifNotLogedin,AuthController.getDashboardPage)

export default router