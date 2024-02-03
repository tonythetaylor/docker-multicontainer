const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3050/api/google/callback",
      passReqToCallback: true,
    },
    function(request, accessToken, refreshToken, profile, done){
      console.log(`\x1b[33m DEBUG passport.js line 13 : ---> ${Object.values(profile)} \x1b[0m`);
      const profileJson = profile;
      const userData = {
        id: profileJson.sub,
        username: profileJson.email,
        firstname: profileJson.given_name,
        lastname: profileJson.family_name,
        picture: profileJson.picture,
        authType: 'oauth'
      }
      console.log(`\x1b[33m DEBUG passport.js line 13 : ---> ${userData} \x1b[0m`);

      return done(null, userData);
      // return request;
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
