// const express = require('express');
// const https = require('https');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const port = 443;
require('dotenv').load();


var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;

// // var ConversationsGrant = AccessToken.ConversationsGrant;

var ADJECTIVES = [
    'Abrasive', 'Brash', 'Callous', 'Daft', 'Eccentric', 'Fiesty', 'Golden',
    'Holy', 'Ignominious', 'Joltin', 'Killer', 'Luscious', 'Mushy', 'Nasty',
    'OldSchool', 'Pompous', 'Quiet', 'Rowdy', 'Sneaky', 'Tawdry',
    'Unique', 'Vivacious', 'Wicked', 'Xenophobic', 'Yawning', 'Zesty'
];

var FIRST_NAMES = [
    'Anna', 'Bobby', 'Cameron', 'Danny', 'Emmett', 'Frida', 'Gracie', 'Hannah',
    'Isaac', 'Jenova', 'Kendra', 'Lando', 'Mufasa', 'Nate', 'Owen', 'Penny',
    'Quincy', 'Roddy', 'Samantha', 'Tammy', 'Ulysses', 'Victoria', 'Wendy',
    'Xander', 'Yolanda', 'Zelda'
];

var LAST_NAMES = [
    'Anchorage', 'Berlin', 'Cucamonga', 'Davenport', 'Essex', 'Fresno',
    'Gunsight', 'Hanover', 'Indianapolis', 'Jamestown', 'Kane', 'Liberty',
    'Minneapolis', 'Nevis', 'Oakland', 'Portland', 'Quantico', 'Raleigh',
    'SaintPaul', 'Tulsa', 'Utica', 'Vail', 'Warsaw', 'XiaoJin', 'Yale',
    'Zimmerman'
];

function randomUsername() {
    function rando(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }
    return rando(ADJECTIVES) + rando(FIRST_NAMES) + rando(LAST_NAMES);
}



// // app.use(express.static(__dirname + '/dist'));
// app.use('/', express.static(path.join(__dirname, '/dist')))

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });



// const httpsOptions = {
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem')
// };


// // app.listen(3000, function () {
// //   console.log('Example app listening on port 3000!')
// // })


// const server = https.createServer(httpsOptions, app).listen(port, () => {
//   console.log('server running at ' + port)
// })


const express = require('express');
const router = express.Router();


// router.get('/token',(req,res, next)=>{
//   res.send('hi');
// });


/*
Generate an Access Token for a chat application user - it generates a random
username for the client requesting a token, and takes a device ID as a query
parameter.
*/
router.get('/token', function(request, response) {
    var identity = randomUsername();
    
      // Create an access token which we will sign and return to the client,
      // containing the grant we just created.
      var token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET
      );
    
      // Assign the generated identity to the token.
      token.identity = identity;
    
      // Grant the access token Twilio Video capabilities.
      var grant = new VideoGrant();
      token.addGrant(grant);
    
      // Serialize the token to a JWT string and include it in a JSON response.
      response.send({
        identity: identity,
        token: token.toJwt()
      });
});



module.exports = router;
