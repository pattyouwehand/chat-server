const express = require('express')
const {Router} = express

const messages = ['Hello world', 'goodbey']

function factory(stream){
  const router = new Router()

  function onStream(req, res){
    const data = JSON.stringify(messages)

    stream.updateInit(data)                 //use json sse, so need to convert json to string
    stream.init(req, res)
  }
  router.get('/stream', onStream)

  return router
}


module.exports = factory