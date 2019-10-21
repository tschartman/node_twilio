var util = require('util')
const axios = require('axios')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
var port = process.env.PORT || 8080;
require('dotenv').config();

const app = express()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.get('/sms', (req, res) => {    
    client.messages
    .create({
       body: 'updating the text message being sent',
       from: '+12563673096',
       to: '+13096576541'
     })
    .then(message => console.log(message.sid));
    
  res.send("Hey")
});

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port 8080');
});