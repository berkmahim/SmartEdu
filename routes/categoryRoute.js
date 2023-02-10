import express from "express"

import CategoryController from "../controllers/CategoryController.js"

const router = express.Router()

router.route('/').post(CategoryController.createCategory)




export default router