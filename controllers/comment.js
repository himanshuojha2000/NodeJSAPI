const verifyToken = require('../middlewares/verifyToken')
const Comment = require('../models/Comment')
const commentController = require('express').Router()

// get all comments from post
commentController.get("/:postId", async(req, res) => {
    try {
       const comments = await Comment.find({postId: req.params.postId}) 

       return res.status(200).json(comments)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

/
// create a comment
commentController.post('/', verifyToken, async(req, res) => {
    try {
        const createdComment = await Comment.create({...req.body, userId: req.user.id})

        return res.status(201).json(createdComment)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

module.exports = commentController