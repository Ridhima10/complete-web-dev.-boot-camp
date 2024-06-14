const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let logo="Upasthiti"
    let searchText="search now"
    let arr=[1,2,3]
    res.render("enginejs",{logo,searchText,arr})
})
app.get('/blog/:slug', (req, res) => {
    // let title;
    // let desc;
    res.render("enginejs",{title,desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})