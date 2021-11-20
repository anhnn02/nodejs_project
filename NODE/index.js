const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');

app.use(cors());

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}))

const isLoggedIn = (req, res, next) =>{
  if(req.user){
    next();
  } else{
    res.sendStatus('401');
  }
}

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.send('You logout!')
})
app.get('/failed', function (req, res) {
  res.send('You failed')
})
app.get('/good', isLoggedIn, function (req, res) {
  res.send(`Welcome hello ${red.user.displayName}`)
})
 
app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  });

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
})

app.listen(3000)