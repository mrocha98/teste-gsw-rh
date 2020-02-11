var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 4200));

app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(app.get('port'), function (req, res) {
    console.log('======== GSW-RH Running =======');
    console.log('Port ==> ', app.get('port'));
    console.log('================================');
});