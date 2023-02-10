import User from "../models/User.js";

const UserController = {}

UserController.createUser = async (req, res) =>{
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
export default UserController