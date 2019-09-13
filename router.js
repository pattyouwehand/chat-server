const express = require('express')
const {Router} = express

const messages = ['Hello world', 'goodbey']

function factory(stream){
  const router = new Router()

  function onStream(req, res){
    const data = JSON.stringify(messages)
    console.log('data test:', data)

    stream.updateInit(data)                 //use json sse, so need to convert json to string
    return stream.init(req, res)
  }
  router.get('/stream', onStream)

  function onMessage(req, res){
    const {text} = req.body

    messages.push(text)
    const data = JSON.stringify(messages)
    stream.send(data)

    return res.send(text)                     //don't forget this return!!

  }
  router.post('/message', onMessage)
  return router
}


module.exports = factory