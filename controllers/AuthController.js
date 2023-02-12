import bcrypt  from 'bcrypt'
import User from "../models/User.js"
import Category from "../models/Category.js"
import Course from "../models/Course.js";

const AuthController = {}

AuthController.createUser = async (req, res) =>{
    try {
        const user = await User.create(req.body)
        res.status(201).redirect('/login')
        // res.send('kurs olusturuldu')
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }}

AuthController.loginUser = async (req, res) =>{
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email })
        let same = await bcrypt.compare(password, user.password)
        if(same){
            req.session.userID = user._id
            res.status(200).redirect('/users/dashboard')
        }
        else{
            res.send('Geçersiz')
        }

    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }}
AuthController.logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}
AuthController.getDashboardPage = async (req, res) => {
    const user = await User.findOne({_id:req.session.userID})
    const categories = await Category.find()
    const courses = await Course.find({user:req.session.userID}).sort('-createdAt')

    res.status(200).render('dashboard',{
        page_name: 'dashboard',
        user,
        categories,
        courses
    })
}



export default AuthController