var express = require('express');
var port = 3000 || process.env.PORT;
var app = express();

var randomWord = require('random-word');
var fs = require("fs");
var random = function() {
    var ran = "";

    for (var i = 0; i < 100; i++) {
        ran += Math.floor((Math.random() * 100) + 10) + " - " + randomWord() + "\n"
    }

    return ran;
}

console.log(random());

fs.appendFile("newRandom.txt", random(), function(err) {
    if (err) throw err;
    console.log('saved');
})


app.get('*', function(req, res) {
    fs.readFile('newRandom.txt', function(err, file) {
        if (err) throw err;
        console.log('Saved!');
        console.log (file)
        res.end(file)
    })


})
app.listen(port, function() {
    console.log('The server is running, ' +
        ' please open your browser at http://localhost:%s',
        port);
});
