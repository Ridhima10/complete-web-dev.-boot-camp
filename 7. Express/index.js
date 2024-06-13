const express = require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')



const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)



// Chaining of requests


// Req used by browser - get req (it shows data in url), it also has limit thats why used less while sending large data
app.get('/', (req, res) => {
    console.log("its a get request") //shows in console after hitting url in browser
    res.send('Index file!')
}).post('/', (req, res) => {
    console.log("its a post request")  // Used to send sensitive information
    res.send('Hello world post')
}).put('/', (req, res) => {
    console.log("its a put request") // Used to update 
    res.send('Put request')
})


// Used to delete 
app.delete('/', (req, res) => {
    console.log("its a delete request")
    res.send('Delete request')
})




// Serving html file
// 1. Make a template folder

// 2. If you want to show res.send content only
// app.get("/index", (req, res) => {
//     console.log("Hello world index") 
//     res.send('Serving html files')
// })


// 2. If you want to show index.html file content
app.get("/index", (req, res) => {
    console.log("Hello world index")
    res.sendFile('templates/index.html', { root: __dirname })
})



// more function
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, name: ["ridhi", "abhay"] })
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})