const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

config.TWILIO_ACCOUNT_SID = 'AC2a06129cd26f3c6d741e9a63e273e21e'
config.TWILIO_AUTH_TOKEN = '07fe7810fa9bd93e7cba188a2d663d88'

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});