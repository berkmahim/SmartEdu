import mongoose from "mongoose"
import bcrypt  from 'bcrypt'
mongoose.set('strictQuery', false)
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student"
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
},{timestamps: true});

UserSchema.pre('save', function (next){
    const user = this
    bcrypt.hash(user.password, 10, (err, hash) =>{
        user.password = hash
        next()
    })
})


const User = mongoose.model('User', UserSchema)

export default User