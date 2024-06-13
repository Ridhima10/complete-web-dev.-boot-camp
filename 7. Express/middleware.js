const express = require('express')
const blog=require('./routes/blog')


const app = express()
const port = 3000
const fs= require("fs")

app.use('/blog',blog)
// Middleware- modify the request
// Order is very important in middleware. just like js code if we have var a=10 and var a=90 the value of a will be 90
// Built-in middleware
// app.use(express.static('public'))

// creating our own middleware
// create a function and put it in app.use

// Middleware 1 (logger)
  app.use((req, res, next)=> {
    console.log(req.headers)
    req.ridhi="My name is Ridhima"

    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next() //it is important otherwise req will be hanging/stuck . did its job and control goes to next middleware
})
// Middleware 2
  app.use((req, res, next)=> {
    console.log('M2')
    next()
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about! ' + req.ridhi)
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})