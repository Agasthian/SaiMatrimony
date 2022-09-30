const _= require('lodash')
const sharp = require('sharp');
const User = require('../models/user')

/************ Authorization ***********/
//Authorization method 1 - This method gets the userby id and save to request body 
//userById method  used in auth.js Router
exports.userById = (req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user ){
            return res.status(400).json({
                error : "User not found"
            })
        }
        // error is handled, but what if we get error ?. We should append the user with req object
        req.profile = user // adds profile object in request with user info
        next() 
        
    })
}


/************ Authorization ***********/
//Authorization method 3  - used for verification if user is logged in
exports.hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!authorized){
        return res.status(403).json({
            error: "User is not authorized to perform this action"
        })
    }
}



/************ Fetch All User GET ***********/
exports.allUsers = (req, res)=>{
    User.find((err, users)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }
        res.json(users)
    }).select("name email created updated")
}




/************ Fetch Single User GET ***********/
exports.getUser = (req, res)=>{
    //userById autodets the id and makes the call to db to fetch user info and appends to req obj. Here we are just
    //making it availabe in response.json.
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    req.profile.avatar=undefined
    return res.json(req.profile)
}



/************ Update User ***********/
exports.updateUser = (req, res, next) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.updated = Date.now()
    user.save( err => {
        if(err){
            return res.status(400).json({
                error : "You are not authorized to perform this action"
            })
        }
        user.hashed_password = undefined
        user.salt = undefined
        res.json({user})
    })
}


/************ Delete User ***********/
exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }     
        res.json({message: "User deleted successfully"})
    })
}

/************ Upload User Profile Photo ***********/
//Post/Upload
exports.uploadProfilePhoto = async (req, res)=> {
    const buffer = await sharp(req.file.buffer).resize({width:200, height:200}).png().toBuffer()
    req.profile.avatar = buffer
    await req.profile.save()

    res.send()
}


/************ Fetch User Profile Photo ***********/
exports.fetchProfilePhoto = async (req, res)=>{
    try{
        const id = await req.profile._id 
        //console.log('id :>> ', id);
        const user = await User.findById(id)
        //console.log('user :>> ', user);
        
         if(!user || !user.avatar){
            throw new Error()
         }
         res.set('Content-Type','image/jpg')
         res.send(user.avatar) 

    }catch (e){
        res.status(404).send()
    }
}

/************ Delete User Profile Photo ***********/
exports.deleteProfilePhoto = async (req, res)=>{
    req.profile.avatar = undefined;
    await req.profile.save()
    res.send()
}