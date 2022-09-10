const express = require('express')
require('dotenv').config()
const app = express()
const port = 3210
const moment =  require('moment');

app.get('/', (req, res) => {
  res.send('Hello World!a')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} ${moment()}` );
  console.log(`My super secret key is: ${process.env.SUPER_SECRET_KEY}`);
})