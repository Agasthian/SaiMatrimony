const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');
const crypto = require('node:crypto');


//Schema defnition - mongoose documentation
const userSchema = new mongoose.Schema({
    googleId : String,
    facebookId : String,
    credits: {
        type: Number,
        default: 0
    },
    name:{
        type: String,
        trim: true,
        required: true,
   },
   email:{
        type: String,
        trim: true,
        required: true,
   },
   hashed_password:{
        type: String,
        required: true,
   },
   salt: String,
   created:{
       type: Date,
       default: Date.now
   },
   avatar:{
        type:Buffer
    },
   updated: Date,
   about:String,
   gender:String,
   mobile:Number,
   dateofbirth:String,
   createdfor:String,
   religion:String,
   mothertounge:String,
   caste:String,
   subCaste:String,
   gothram:String,
   dosham:String,
   maritalStatus:String,
   height:Number,
   familyStatus:String,
   familyType:String,
   familyValues:String,
   disablity:String,
   education:String,
   employedIn:String,
   occupation:String,
   income:String,
   workLocation:String,
   state:String,
   city:String,
   otherCommunity:Boolean   
})

/**
 * Virtual Fiels are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * Keep in mind virtual properties(password) dont get persisted in the database.
 * They only exist logically and are not written to the document's collection.
 */

//password is recevied as user input text but saved as a hashed password in database
//Virtual field - mongoose documentation
userSchema.virtual('password')
.set(function (password) {
    //create temp variable called _password
    this._password = password
    //generate a time stamp
    this.salt = uuidv1()
    //encrypt password()
    this.hashed_password = this.encryptPassword(password)
})
.get( function(){
    return this._password
})


//methods

//https://nodejs.org/api/crypto.html#crypto -> node js inbulit fn for hashing
//sha1 is a hashing similar to sha256
userSchema.methods={

    //plain text is the plain password recived from request from auth controller.it is sent to encryptPassword method  
    //below and check with the password already stored in user model database
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },

    encryptPassword: function(password) {
        if(!password) return"";
        try{
            return crypto.createHmac('sha1', this.salt)
                    .update(password)
                    .digest('hex');
        } catch(err){
            return "";
        }
    }
}

// Model Creation
module.exports = mongoose.model('User', userSchema)