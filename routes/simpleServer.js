var express = require('express');
var port = 3000||process.env.PORT;
var app = express();



app.get('*', function(req, res) {
    res.end('Hello World');
});


app.listen(port, function() {
    console.log('The server is running, ' + ' please open your browser at http://localhost:%s',
        port);
});
