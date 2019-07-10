// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC2a06129cd26f3c6d741e9a63e273e21e';
const authToken = '07fe7810fa9bd93e7cba188a2d663d88';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13093003923',
     to: '+13096576541'
   })
  .then(message => console.log(message.sid));