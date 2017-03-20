var express = require('express');
var debug = require('debug');
var morgan = require('morgan');
var path = require('path');

var app = express();

// morgan('tiny');
// morgan(':method :url :status :res[content-length] - :response-time ms');

app.set('port', (process.env.PORT || 4000));
// setup the logger
//app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
//running server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


app.get('/',function(req,res){
    res.send('index');
});

app.get('/about',function(re,res){
    res.send('about');
})