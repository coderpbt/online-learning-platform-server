const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

const categoris = require('./data/categories.json')
const courses = require('./data/coursces.json')

app.use(cors())


app.get('/categoris', (req,res) => {
  res.send(categoris)
})

app.get('/categorisid/:id', (req, res) =>{
  const id = req.params.id;
  if (id === '08') {
    res.send(courses)
  }else{
    const categoriNews = courses.filter(x => x.category_id === id)
    res.send(categoriNews)
  }
})

app.get('/courses', (req,res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find(n => n._id === id)
  res.send(selectedCourses)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})