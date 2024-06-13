const express = require('express')
const router=express.Router()

// Home page routes
router.get('/', (req, res) => {
    res.send('Shop home page!')
})
router.get('/about', (req, res) => {
    res.send('Shop about page!')
})
router.get('/localShop/:slug', (req, res) => {
    res.send(`Sub-Shop! ${req.params.slug}`)
})

module.exports=router