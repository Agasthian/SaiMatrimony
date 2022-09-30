//The functionality is wrtten in controller part & imported here
const express = require('express')
const {signup, signin, signout} = require('../controllers/auth')
const {userById} = require('../controllers/user')
const {userSignupValidator} = require('../validator')

const router = express.Router() 

router.post('/signup', userSignupValidator,signup)
router.post('/signin', signin)
router.get('/signout', signout)

//Any route containing :userId, our app will first execute userByID()
//We are looking for the param in the incoming request URL. If there is a parameter userId run this method (based on the 
//userid make a request to db and get user information and append to request object) userById method is in 
//userController.js
router.param('userId', userById)

module.exports = router;

