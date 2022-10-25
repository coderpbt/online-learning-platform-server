const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

const categoris = require('./data/categories.json')
const news = require('./data/coursces.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categoris', (req,res) => {
  res.send(categoris)
})

app.get('/categorisid/:id', (req, res) =>{
  const id = req.params.id;
  if (id === '08') {
    res.send(news)
  }else{
    const categoriNews = news.filter(x => x.category_id === id)
    res.send(categoriNews)
  }
})

app.get('/news', (req,res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id)
  res.send(selectedNews)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})