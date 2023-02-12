import Course from "../models/Course.js";
import Category from "../models/Category.js";
import category from "../models/Category.js";

const CourseController = {}

CourseController.createCourse = async (req, res) =>{
    console.log(req.body.category)
    try {
        const course = await Course.create(req.body)
            res.status(201).redirect('/courses')
        // res.send('kurs olusturuldu')
        }catch (error) {
            res.status(400).json({
                status: 'error',
                error
            })
}}

CourseController.getAllCourses = async (req, res) =>{


    try {
        const categorySlug = req.query.categories
        const category = await Category.findOne({slug: categorySlug})
        let filter = {}
        if(categorySlug){
            filter = {category: category._id}
        }

        const courses = await Course.find(filter).sort('-timestamps')
        const categories = await Category.find({})
        //api test
        // res.status(200).json({
        //     status: 'success',
        //     courses
        // })
        // res.send('kurs olusturuldu')
        res.status(200).render('courses', {
            courses: courses,
            categories,
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