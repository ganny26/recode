'use strict';
const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const path = require('path');
var consolidate = require('consolidate');
var dust = require('dustjs-linkedin');
const config = require('./config');

const app = express();



app.set('views',path.join(__dirname,'views'));
app.set('view engine',consolidate.dust);


const server = app.listen(config.get('PORT'),()=>{
	const port = server.address().port;
	console.log(`App listening on port ${port}`)
});

app.get('/',function(req,res){
	res.render('index');
});