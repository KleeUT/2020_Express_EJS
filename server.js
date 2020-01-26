// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


// index page 
app.get('/', function(req, res) {
    var languages = [
        { name: 'JavaScript', popularity: 1 },
        { name: 'Python', popularity: 2 },
        { name: 'C#', popularity: 3 }
    ];
    var tagline = "JavaScript is the most popular language";

    res.render('pages/index', {
        languages: languages,
        tagline: tagline
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.use(express.static(__dirname + '/public'));

app.listen(8080);
console.log('8080 is the magic port');