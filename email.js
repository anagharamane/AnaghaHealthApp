var send = require('gmail-send')({
//var send = require('../index.js')({
  user: 'harshu.rtk03@gmail.com',
  // user: credentials.user,                  // Your GMail account used to send emails
  pass: 'surekha@1403',
  // pass: credentials.pass,                  // Application-specific password
  to:   'ramaneanagha10@gmail.com',
  // to:   credentials.user,                  // Send to yourself
                                           // you also may set array of recipients:
                                           // [ 'user1@gmail.com', 'user2@gmail.com' ]
  // from:    credentials.user             // from: by default equals to user
  // replyTo: credentials.user             // replyTo: by default undefined
  subject: 'Hello',
  text:    'How are you??????',         // Plain text
  //html:    '<b>html text</b>'            // HTML
});

send({ // Overriding default parameters
  subject: "Anagha Ramane-Psycho",         // Override value set as default  
}, function (err, res) {
  console.log('returned: err:', err, '; res:', res);
});sir soo j