const express = require('express')
const {getPosts,createPost, postByUser,postById, deletePost, isPoster,updatePost} = require('../controllers/post')
const {userById} = require('../controllers/user')
const {requireSignin} = require('../controllers/auth')
const {createPostValidator} = require('../validator')

const router = express.Router()

router.get('/posts/all', getPosts)
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator)
router.get('/posts/by/:userId', requireSignin ,postByUser)
router.put('/post/:postId', requireSignin, isPoster , updatePost)
router.delete('/post/:postId', requireSignin, isPoster ,deletePost)

//Any route containing :userId, our app will first execute userByID()
router.param('userId', userById)
//Any route containing :postId, our app will first execute postByID()
router.param('postId', postById)

module.exports = router