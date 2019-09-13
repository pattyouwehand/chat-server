const express = require('express')
const Sse = require('json-sse')         //place to store clients and send message to all clients
const bodyParser = require('body-parser')
const factory = require('./router')
const stream = new Sse()
const app = express()
const router = factory(stream)          // is alway going to use the same stream instead off a reference
const port = process.env.PORT || 4000

const jsonParser = bodyParser.json()
app.use(jsonParser)

function onlisten(){
  console.log(`Listening on post ${port}`)
}

app.use(router)

app.listen(port, onlisten)