import express from 'express'
import ejs from 'ejs'
import mongoose from "mongoose";
import pageRoute from  './routes/pageRoute.js'
import courseRoute from  './routes/courseRoute.js'
import categoryRouteRoute from  './routes/categoryRoute.js'
import categoryRoute from "./routes/categoryRoute.js";


mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/smartedu-db')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)



app.listen(port, () => {
    console.log(`sunucu ${port} portunda baslatildi`)
})