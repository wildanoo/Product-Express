require('dotenv').config();
const jwt = require('jsonwebtoken')
const passport = require('passport')

let login = (req,res,next) => {
    passport.authenticate('local',{session:false}, (err, user, info) => {
        if (err) { return res.status(400).next(err) }
        if (!user) { return res.status(400).json( { message: info.message}) }

        const data = {
            email : user.email,
            createdAt : new Date()
        }
        const token = jwt.sign(data,process.env.JWT_SECRET,{ expiresIn: 86400 * 7 });
        return res.json({
            success: true,
            message: "User signed in",
            authorization : token
        });
      })(req, res, next); 
}

let checkAuth = (req, res, next) => {
    passport.authenticate('jwt',{session:false}, (err, user, info) => {
        
        if (err) { return next(err) }
        if (!user) { return res.status(400).json( { message: info.message }) }

        req.user = user;
        next();
      })(req, res, next); 
}

module.exports = {login, checkAuth}
