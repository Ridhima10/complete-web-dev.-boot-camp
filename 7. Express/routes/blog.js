const express = require('express')
const router=express.Router()


// Middleware specific to this router only
router.use((req, res, next)=> {
    console.log('M2')
    next()
})


// Home page routes
router.get('/', (req, res) => {
    res.send('Blogs home page!')
})
router.get('/about', (req, res) => {
    res.send('Blogs about page!')
})
router.get('/blogpost/:slug', (req, res) => {
    res.send(`Sub-blogs! ${req.params.slug}`)
})

module.exports=router