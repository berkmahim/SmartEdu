import User from "../models/User.js";
import bcrypt  from 'bcrypt'

const AuthController = {}

AuthController.createUser = async (req, res) =>{
    try {
        const user = await User.create(req.body)
        res.status(201).json({
            status: 'success',
            user
        })
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
            res.status(200).redirect('/')
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




export default AuthController