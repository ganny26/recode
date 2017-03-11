var express = require('express');
var cons = require('consolidate')
var dust = require('dustjs-linkedin');
var app = express();
var fs = require('fs');
var request = require('request');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'root',
	database: 'test'
});


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	} else {
		console.log('connected as id ' + connection.threadId);
	}
});



app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/public'));

app.get('/users', function (req, res) {
	connection.query('SELECT * from tblSubscribe', function (err, rows, fields) {
		if (!err){ 
			res.status(200);
			res.setHeader('X-Fusion-Id','12345');
			res.setHeader('X-Fusion-Account-Number','DSC123JKL');
			res.json(rows);
			console.log(req.headers);
		}
		else{
			res.status(500);
            res.send('Internal server error');
		}
			
	});
});

// views is directory for all template files
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.get('/', function (request, response) {
	var data = {
		'fname': 'Selva',
		'lname': 'Ganesh',
		'email': 'selvaganesh93@gmail.com'
	};
	response.render('index', { data: data });
});

app.get('/api', function (req, res) {

	const _url = 'https://jsonplaceholder.typicode.com/users/1';
	var userdata;

	request(_url, function (err, response, body) {
		if (!err && response.statusCode == 200) {
			res.send(JSON.stringify(req.headers));
			res.render('users', { 
				data: JSON.parse(body) 
			});
		} else {
			res.send('Cant able to conntect server ' + _url);
		}
	});
});



app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});
