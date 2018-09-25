require('dotenv').config();
const jwt = require('jsonwebtoken')
const passport = require('passport')
const {users} = require('../services/v1')

let register = async (req,res) => {
    try {
        const createUser = await users.register(req.body);

        if(!createUser){
            throw new Error('Register failed')
        }

        return res.status(200).json({
            success : true,
            message : "User registered"
        })
    } catch (err) {
        return res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

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
    console.log('masuk check auth')
    passport.authenticate('jwt',{session:false}, (err, user, info) => {
        
        if (err) { return next(err) }
        if (!user) { return res.status(400).json( { message: info.message }) }

        req.user = user;
        next();
      })(req, res, next); 
}

module.exports = {login, checkAuth, register}
