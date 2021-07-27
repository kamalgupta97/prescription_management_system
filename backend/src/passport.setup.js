const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    // User.findById(id, function(err, user) {
      done(null, user);
    // });
  });
  
passport.use(new GoogleStrategy({
    clientID: '100324951207-o4ma2iji12ucj1tmc756q6r1mvb33k91.apps.googleusercontent.com',
    clientSecret: 'oyixv56DgOqGU_PlMhqOKBjS',
    callbackURL: "http://localhost:7777/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    // });
  }
));


// Client ID
// 100324951207-o4ma2iji12ucj1tmc756q6r1mvb33k91.apps.googleusercontent.com
// Client secret
// oyixv56DgOqGU_PlMhqOKBjS