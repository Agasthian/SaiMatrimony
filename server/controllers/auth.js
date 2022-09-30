const jwt = require('jsonwebtoken') 
const { expressjwt: jwt1 } = require("express-jwt")
const keys = require('../config/keys');

const User = require('../models/user')

exports.signup = async (req, res) =>{

    //Checks if the user is alredy present in db using user email . req.body - holds name, email, password
    const userExists = await  User.findOne({email : req.body.email})
    if(userExists) return res.status(403).json({
        error : 'Email is taken!'
    })

    const user = await User(req.body)
    await user.save()
    res.status(200).json({message : 'User SignUp successfull! Please Login '})
}  

exports.signin = (req, res)=>{
    //Find the user based on the email
    //if error or no user
    //If user is found , authenticate
    // generate a token with a user id and secret
    //persist the token as 't' in cookie with expiry date
    //return response with user and token to front end client


        //Find the user based on the email
        const { email, password} = req.body
        User.findOne({email}, (err, user)=>{
            //if error or no user
            if(err || !user){
                return res.status(401).json({
                    error : "User with this email does not exists. Please Signin"
                })
            }
            //If user is found , make sure the email and password match(authenticate)
            //created authenticate method in user model and used here
    
            if(!user.authenticate(password)){ //Check for error before processing
                return res.status(401).json({
                    error : "Email and password do not match"
                })  
            } 
    
            
            // Generate a token with a user id and secret
            const token = jwt.sign({_id: user._id}, keys.jwtSecret);
    
            // Persist the token as 't' in cookie with expiry date - cookie stored in local storage (2 methods for cookie)
            res.cookie('t', token, { exprie: new Date() + 9999})
    
            //return response with user and token to front end client   - cookie from server for server side rendering
            const {_id, name, email} = user
            return res.json({token, user:{_id, email, name}})
        })
}

exports.signout = (req, res) =>{
    //clear the cookie
   res.clearCookie('t')
   return res.json({message: "Signout successful!"})
}

//Middlware for accessing procted routes - using express-jwt npm library
//When user tries to access procted routes. Secret key and token are expected from request (id user is already signed in) and this lib intercepts and checks the secret key

exports.requireSignin = jwt1({
    secret: keys.jwtSecret,
    algorithms: ["HS256"], // added later
    userProperty: "auth",
  });