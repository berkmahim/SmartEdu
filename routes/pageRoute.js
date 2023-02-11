import express from "express"
import * as redirectMiddleware from '../middlewares/redirectMiddleware.js'

import PageController from "../controllers/PageController.js"

const router = express.Router()

router.route('/').get(PageController.getIndexPage)
router.route('/about').get(PageController.getAboutPage)
router.route('/register').get(redirectMiddleware.ifLogedin,PageController.getRegisterPage)
router.route('/login').get(redirectMiddleware.ifLogedin,PageController.getLoginPage)

export default router