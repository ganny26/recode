var express = require('express');
const cons = require('consolidate');
const dust = require('dustjs-linkedin');
const bodyParser = require('body-parser');
var passport = require('passport');
var session  = require('express-session');
var FacebookStrategy = require('passport-facebook').Strategy;

var cookieParser = require('cookie-parser');


var app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', PORT);


//view engine as dust
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//passport initialization
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use(session({
  secret: 'oaodata'
}));

//serilization
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


//fb initialization
passport.use(new FacebookStrategy({
        clientID: '658955644261049',
        clientSecret: '0bb9fcaf5ed37cd0cdbc6e232b6ca454',
        callbackURL: "http://localhost:5000/auth/facebook/callback",
        profileFields: ['id', 'displayName','email','birthday','gender','first_name','last_name']
    },
   function(accessToken, refreshToken, profile, cb) {

    return cb(null, profile);
  }));


//index route
app.get('/', function(req, res) {
    req.cookies.hello = 'hello';
    res.render('index');
});

app.get('/auth/facebook', function(req, res) {
    passport.authenticate('facebook',{
    scope: 'email',
    authType: 'reauthenticate'
    });
});


app.get('/about',function(req,res){
    res.render('about');
})

app.get('/details',function(req,res){
     var userdetails = req.session.fbdata;
    res.render('details',{data:userdetails});
})

app.get('/welcome',function(req,res){
    console.log('Data from session',req.session);
    var userdetails = req.session.fbdata;
    res.header('id',userdetails.id );
    res.header('fname',userdetails.firstName);
	res.render('welcome',{data:userdetails});
});

app.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
        var fbUserData = {
            'id':req.user.id,
            'firstName':req.user._json.first_name,
            'lastName':req.user._json.last_name,
            'gender':req.user.gender
        };
        req.session.hello = 'hello';
        req.session.fbdata = fbUserData;
        req.cookies.fbdata = fbUserData;
        res.redirect('/welcome');
    });

app.get('/logout',function(req,res){
    req.session.destroy();
    req.logout();
    res.redirect('/');
});


app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);
