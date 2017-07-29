var express = require('express');
var port = 3000;
var app = express();
var bodyParser = require('body-parser')
var dog = require('../models/dog')

var mongoose = require('mongoose');
mongoose.connect('mongodb://nitish:comnitish@ds032340.mlab.com:32340/comnitish');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


app.post('/dogName', function(req, res) {
    var dogName = req.body.name;
    console.log("PARAMETER FROM FORM")

    dog.findOne({ 'name': dogName }, function(err, data) {
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        console.log(data)

        res.json(data)
    })

})

app.post('/registerNewDogy',function(req,res){
    var dog1 = new dog({'name':req.body.name,
        'age':req.body.age,
        'collar_id':req.body.collar_id})

    console.log("--------"+dog1)
    dog1.save(function(err,data){
        if(err){
            console.log(err)
        }
        res.json(data)
    })
})

app.get('/listofdogy',function(req,res){
    dog.find(function(err,data){
        if (err) {
            console.log(err)
            res.end("SOME ERROR OCCURED")
        }
        res.json(data)
    })
})

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
});
