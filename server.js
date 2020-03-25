if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const expressRouter = require('./routes/index')

const app = express()
const port = 3000

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', expressRouter)

//connect to mongoose
const mongoose = require('mongoose')



mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true

})

const db = mongoose.connection
db.on('error',error => console.error(error)
)

db.once('open',() => console.log('connected to mongoose')
)

app.listen(port, () => console.log('Example app listening on ' +  port +' port!'))