const express = require('express')
const mongoose = require('mongoose')
const app = express()
const MONGO_URL = 'mongodb://localhost:27017/flights'

app.use(express.json())
app.use('/api', require('./routes/routes'))

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connected to mongoDB')
})
.catch(()=>{
    console.log('Database connection error')
})

app.listen(5000, () => console.log('connected at port 5000'));