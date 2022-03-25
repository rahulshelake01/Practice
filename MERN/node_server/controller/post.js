const db = require("../db")
const Posts = db.Posts
const logger  = require("../config/winston")

const addPost = async (req, resp) => {
    
    let Post = new Posts(req.body)
    Post.save(function(err, post) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({post, message:"Post added successfully."})
        }
    })
}

const getPost = async (req, resp) => {
    let response = {post: await Posts.findById(req.params.pid)}
    resp.status(200).json(response)
}

const getPosts = async (req, resp) => {
    logger.log({
        url: req.originalUrl,
        level:'info',
        message: "this is main message",
        request: {uid:10},
        source: "app.js",
        headers: req.headers
    })

    let response = {posts: await Posts.find({})}
    resp.status(200).json(response)
}

const updatePost = async (req, resp) => {
    Posts.findByIdAndUpdate(req.params.pid, req.body, function(err) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message: "Post updated successfully."})
        }
    })
}

const deletePost = async (req, resp) => {
    Posts.findByIdAndDelete(req.params.pid, function(err) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message: "Post deleted successfully."})
        }
    })
}

module.exports = {
    addPost,
    getPost,
    getPosts,
    updatePost,
    deletePost
}