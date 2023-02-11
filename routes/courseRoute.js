import express from "express"

import CourseController from "../controllers/CourseController.js"
import * as roleMiddleware from '../middlewares/roleMiddleware.js'

const router = express.Router()

router.route('/').post(roleMiddleware.checkRole(["teacher", "admin"]),CourseController.createCourse)
router.route('/').get(CourseController.getAllCourses)
router.route('/:slug').get(CourseController.getCourse)


export default router