require('dotenv').config();
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');
const {users} = require('../models');


module.exports =
passport.use(new localStrategy({
   usernameField: 'email',
   passwordField: 'password' 
}, async (email,password,done) => {
    try {
        // console.log('isi email : ', email)
        // console.log('isi password : ', password)

        const userData = await users.findOne({
            where: {
                email: email
            }
        })

        if (!userData) {
            return done(null, false, {
                message: 'Incorrect email.'
            });
        }
        
        const match = await bcrypt.compare(password,userData.password);
        
        if (!match) {
            return done(null, false, {
                message: 'Incorrect password'
            });
        }

        return done(null,userData)
    } catch (err) {
        return done(error);
    }
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : process.env.JWT_SECRET
}, async(jwtPayload, cb) => {
    try {
        const userData = await users.findOne({
            where: {
                email: jwtPayload.email
            }
        })

        return cb(null,userData)
    } catch (err) {
        return cb(error)
    }
}))

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    user.findById(id, function (err, user) {
        done(err, user);
    });
});
