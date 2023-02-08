import Course from "../models/Course.js";
import Category from "../models/Category.js";

const CourseController = {}

CourseController.createCourse = async (req, res) =>{
    try {
        const course = await Course.create(req.body)
            res.status(201).json({
                status: 'success',
                course
            })
        // res.send('kurs olusturuldu')
        }catch (error) {
            res.status(400).json({
                status: 'error',
                error
            })
}}

CourseController.getAllCourses = async (req, res) =>{


    try {
        const categories = await Category.find({})
        const categorySlug = req.query.categories
        const category = await Category.findOne( {slug: categorySlug})

        let filter = {}

        if (categorySlug){
            filter = {category: category._id}
        }

        //api test
        // res.status(200).json({
        //     status: 'success',
        //     courses
        // })
        // res.send('kurs olusturuldu')
        const courses = await Course.find(filter)

        res.status(200).render('courses', {
            courses: courses,
            categories: categories,
            page_name: 'courses'
        })
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}


CourseController.getCourse = async (req, res) =>{


    try {
        const course = await Course.findOne({slug: req.params.slug})

        res.status(200).render('course', {
            course,
            page_name: 'courses',
        })
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}







export default CourseController