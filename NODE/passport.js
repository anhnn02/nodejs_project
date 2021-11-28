const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user');

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
  async function(accessToken, refreshToken, profile, done) {
      if(profile.emails[0].value.indexOf('fpt.edu.vn')){
        const checkAcc = await User.findOne({ email: profile.emails[0].value});
        console.log(checkAcc);

        if(checkAcc){
          return done(null, profile);
        }
        else {
          return done(null, false);
        }
      }
  }
));