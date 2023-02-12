import mongoose from "mongoose"
import slugify from "slugify";
import Category from "../models/Category.js";
import User from "../models/User.js";
mongoose.set('strictQuery', false)
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    slug: {
        type: String,
        unique: true,
    }
},{timestamps: true});


CourseSchema.pre('validate', function (next){
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next()
})

const Course = mongoose.model('Course', CourseSchema)

export default Course