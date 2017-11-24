var express = require('express');
var app = express();
var basicAuth = require('express-basic-auth');

// no protection
app.use(express.static('public'));

// password protection which shows a password popup in browser
app.use(basicAuth({
    users: { 'john': 'test' },
    challenge: true,
    realm: 'Protected area'
}));

// protected folder
app.use('/protected', express.static('protected'));

app.listen(3000);