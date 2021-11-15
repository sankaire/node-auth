const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const app = express()

//DB config
const db = require('./config/keys').mongoURI

//connect to mongo
mongoose.connect(db, { useNewUrlParser:true })
.then(() =>console.log('mongodb connected'))
.catch((err)=>console.log(err))

//ejs
app.use(expressLayouts)
app.set('view engine', 'ejs')

//body parser
app.use(express.urlencoded({ extended: true }))

//routes
const home = require('./routes/index')
const users = require('./routes/users')

app.use('/', home)
app.use('/users', users)

const PORT = 5000 || process.env.PORT

app.listen(PORT, console.log(`Server running on ${PORT}`))