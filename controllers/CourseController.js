import Course from "../models/Course.js";
import Category from "../models/Category.js";
import category from "../models/Category.js";
import User from "../models/User.js";

const CourseController = {}

CourseController.createCourse = async (req, res) =>{
    try {
        const course = await Course.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            user: req.session.userID
        })
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

        const courses = await Course.find(filter).sort('-createdAt')
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
        const user = await User.findById(req.session.userID)
        const course = await Course.findOne({slug: req.params.slug}).populate('user')

        res.status(200).render('course', {
            course,
            page_name: 'courses',
            user
        })
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}

CourseController.enrollCourse = async (req, res) =>{
    try {
        const user = await User.findById(req.session.userID)
        await user.courses.push({_id:req.body.course_id})
        await user.save()


        res.status(200).redirect('/users/dashboard')
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}
CourseController.releaseCourse = async (req, res) =>{
    try {
        const user = await User.findById(req.session.userID)
        await user.courses.pull({_id:req.body.course_id})
        await user.save()


        res.status(200).redirect('/users/dashboard')
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}






export default CourseController