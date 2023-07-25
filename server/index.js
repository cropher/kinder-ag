const express = require('express')
const app = express()
const port = 27017

app.get('/', (req, res) => {
  res.send('Hello Techlabs123!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})