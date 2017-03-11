var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' }),
cons = require('consolidate'),
dust = require('dustjs-linkedin');


var app = express();

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
	res.render('index');
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
	console.log('file',req.file);
  	  res.send(req.file);
})

app.listen(3000,function(req,res){
	console.log('Server running port 3000');
});