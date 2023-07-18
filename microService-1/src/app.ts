import express from 'express'
import bodyParser = require('body-parser')
import { PORT } from './constant'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World! asd')
})

app.get('/mains', (req, res) => {
  res.send('Hello World! asd')
})

app.get('/visits/gets', (req, res) => {
  res.send('Hello World! asd')
})

app.post('/post', (req, res) => {
  res.send('Hello World! post')
})
app.put('/post', (req, res) => {
  res.send('Hello World! put')
})
app.patch('/post', (req, res) => {
  res.send('Hello World! patch')
})
app.delete('/post', (req, res) => {
  res.send('Hello World! delete')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  return console.log(`Express is listening at http://localhost:${PORT}`)
})
