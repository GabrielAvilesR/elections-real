import http from 'http'
import { port, ip } from './config'
import express from 'express'
import cors from 'cors'
import { wildCardCors } from './customFunctions'
import bodyParser from 'body-parser'
import api from './api'

const app = express()
app.use(cors())
//app.use(wildCardCors)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: '50mb'}))
app.use(api)
const server = http.createServer(app)


setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d', ip, port)
  })
})

export default app