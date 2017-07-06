var express = require('express');
var port = 3000;
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.get('/name/:user_name', function(req, res) {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.end('<html><body>' +
        '<h1>Hello ' + req.params.user_name + '</h1>' +
        '</body></html>'
    );
});

app.get('*', function(req, res) {
    res.end('Hello World');
});


app.post('/username', function(req, res) {
	var username = req.body.username;
	res.end(username)
})


app.post('/registration', function(req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;
	var phoneNumber  = req.body.phoneNumber;

	// res.end(firstName+lastName+email+phoneNumber)
	res.json(firstName+lastName+email+phoneNumber);
	res.end()
})

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
});
