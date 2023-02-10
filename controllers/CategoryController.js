import Category from "../models/Category.js";

const CategoryController = {}

CategoryController.createCategory = async (req, res) =>{
    try {
        const category = await Category.create(req.body)
        res.status(201).json({
            status: 'success',
            category
        })
        // res.send('kurs olusturuldu')
    }catch (error) {
        res.status(400).json({
            status: 'error',
            error
        })
    }}
export default CategoryController