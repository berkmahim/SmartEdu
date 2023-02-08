import express from "express"

import CourseController from "../controllers/CourseController.js"

const router = express.Router()

router.route('/').post(CourseController.createCourse)
router.route('/').get(CourseController.getAllCourses)
router.route('/:slug').get(CourseController.getCourse)


export default router