var util = require('util')
const axios = require('axios')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
var port = process.env.PORT || 8080;

const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/sms', (req) => {
    const body = req.body.Body.split(/\r?\n/)

    

    axios.post('https://reqres.in/api/users', {
        name: body[0],
        job: body[1]
      },
      {
      headers: {
        Authorization: "This will be a hash",
      }
    })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })  
});

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port 8080');
});