var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/process_get', function (req, res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
    res.send('Page Questionnaire');
})

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/src/index.html" );
    //res.send('Page Questionnaire');
})


var app = app.listen(8081, function () {
    var host = app.address().address
    var port = app.address().port

    console.log("Example server listening at http://127.0.0.1:8081", host, port)
})