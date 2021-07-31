const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const { User } = require('../models/User');

passport.serializeUser((user, done) => {
  console.log('serializeUser, ', user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserializeUser, ', id);
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log('googleId: ', profile.googleId);
      // console.log('email: ', profile.emails.value);
      // console.log('name: ', profile.displayName);
      // console.log('image: ', profile.photos.value);
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    },
  ),
);
