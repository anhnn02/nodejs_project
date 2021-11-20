const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

  
passport.use(new GoogleStrategy({
    clientID: "831901708936-kplk3q8n4rffk2cmjpojqoerjvuetsj1.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
  }
));