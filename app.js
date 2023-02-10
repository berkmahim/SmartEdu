import express from 'express'
import ejs from 'ejs'
import mongoose from "mongoose";
import pageRoute from  './routes/pageRoute.js'
import courseRoute from  './routes/courseRoute.js'
import categoryRoute from "./routes/categoryRoute.js";
import userRoute from "./routes/userRoute.js";




const app = express()
const port = 3000

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/smartedu-db')



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)



app.listen(port, () => {
    console.log(`sunucu ${port} portunda baslatildi`)
})