const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://our-first-user:w93YiunuESEwP8o7@cluster0.qo8rt.mongodb.net/testbase?retryWrites=true&w=majority')
    .then(() => console.log('mongoDB connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('hell world')
})

app.listen(port, () => console.log(`example app listening on port ${port}`))