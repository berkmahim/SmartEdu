import express from 'express'
import ejs from 'ejs'
import mongoose from "mongoose"
import session from 'express-session'
import MongoStore from "connect-mongo"
import pageRoute from  './routes/pageRoute.js'
import courseRoute from  './routes/courseRoute.js'
import categoryRoute from "./routes/categoryRoute.js"
import userRoute from "./routes/userRoute.js"




const app = express()
const port = 3000

global.userID = null

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/smartedu-db')




app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: 'mongodb://localhost/smartedu-db'})
}))
app.use('*', (req, res, next) => {
    userID = req.session.userID
    next()
})
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)



app.listen(port, () => {
    console.log(`sunucu ${port} portunda baslatildi`)
})