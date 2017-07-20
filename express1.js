var express = require('express');
var port = 3000 || process.env.PORT;
var app = express();

var bodyParser = require('body-parser')

var randomWord = require('random-word');
var fs = require("fs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended: true

}));
// var random = function() {
//     var ran = "";

//     for (var i = 0; i < 100; i++) {
//         ran += Math.floor((Math.random() * 100) + 10) + " - " + randomWord() + "\n"
//     }

//     return ran;
// }

// console.log(random());

// fs.appendFile("newRandom.txt", random(), function(err) {
//     if (err) throw err;
//     console.log('saved');
// })


// app.get('/getRandomNumber', function(req, res) {
//     fs.readFile('newRandom.txt', function(err, file) {
//         if (err) throw err;
//         console.log('Saved!');
//         res.end(file)
//     })


// })

app.post('/registration', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var phoneNumber = req.body.phoneNumber;

    console.log(req.body.firstName)

    // res.end(firstName+lastName+email+phoneNumber)
    var result = firstName + lastName + email + phoneNumber;
    fs.appendFile("newResult.txt", result, function(err) {
        if (err) throw err;
        console.log('saved');


    })
    res.end(result)

})

app.get('/getInfo', function(req, res) {
    fs.readFile('newResult.txt', function(err, file) {
        if (err) throw err;
        console.log('get!');
        
})
res.end(file)
    })

app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
})
