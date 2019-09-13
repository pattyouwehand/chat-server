const express = require('express')
const app = express()
const port = process.env.PORT || 4000

function onlisten(){
  console.log(`Listening on post ${port}`)
}

app.listen(port, onlisten)