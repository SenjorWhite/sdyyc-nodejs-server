const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../configs/keys");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let user = await User.findById(id);
    done(null, user);
});

const googleStrategy = new GoogleStrategy({
    clientID: keys.Google.ClientID,
    clientSecret: keys.Google.ClientSecret,
    callbackURL: keys.Google.CallbackURL
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    let user = await User.findOne({ googleID: profile.id })
    if (!user) {
        user = await new User({
            googleID: profile.id,
            displayName: profile.displayName,
            picture: profile.picture,
            email: profile.email
        }).save();
    }

    return done(null, user);
})

passport.use(googleStrategy);

