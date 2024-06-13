const express = require('express')
const app = express()
const port = 3000

// Middleware
app.use(express.static('public'))


// app.get or app.post or app.put or app.delete (path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About Page!')
})
app.get('/contact', (req, res) => {
  res.send('Contact Page!')
})
app.get('/blog', (req, res) => {
  res.send('Blog page!')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`Blog page! ${req.params.slug}`)
})
app.get('/blog/:slug/:second', (req, res) => {
  res.send(`Blog page! ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})