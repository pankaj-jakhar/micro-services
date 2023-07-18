import express from 'express'
import bodyParser = require('body-parser')
import { PORT } from './constant'
import checkRoutes from './checkRoutes';
import checkDomains from './checkDomain';
import checkJWT from './checkJWT';
import dynamicReverseProxy from './dynamicReverseProxy';

const app = express()
app.use(bodyParser.json())
app.enable('trust proxy');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(checkRoutes)
app.use(checkDomains)
app.use(checkJWT)

app.all('*', dynamicReverseProxy);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  return console.log(`Express is listening at http://localhost:${PORT}`)
})
