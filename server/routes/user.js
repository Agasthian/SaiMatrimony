//The functionality is wrtten in controller part & imported here
const express = require('express')
const multer = require('multer');

const {requireSignin} = require('../controllers/auth')
const {userById,allUsers,getUser, updateUser, deleteUser, uploadProfilePhoto, fetchProfilePhoto, deleteProfilePhoto} = require('../controllers/user')

const router = express.Router() 

/********* Multer Config ************/ 
const upload = multer({ 
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){ //regerx checks
            return cb(new Error('Please enter a jgp or jpeg or png file')) // if we have error
        }
        cb(undefined, true) // if every think is ok (200) - cb->callback(argument1:undefined, argument2:boolean)
        //cb(undefined, false) - silently rejects the upload
    } 
})

router.get('/users', allUsers)
router.get("/user/:userId", requireSignin , getUser)
router.put("/user/edit/:userId" , updateUser)
router.delete("/user/:userId", requireSignin , deleteUser)
router.post("/user/avatar/:userId",upload.single('file'),uploadProfilePhoto,(error, req, res, next) => {
    res.status(400).send({error:error.message})
  })
router.get('/user/avatar/:userId', fetchProfilePhoto)
router.delete("/user/avatar/:userId", deleteProfilePhoto);


//Any route containing :userId, our app will first execute userByID()
router.param('userId', userById)

module.exports = router;

