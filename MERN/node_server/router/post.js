const router = require("express").Router()
const controller = require("../controller/post")
const { Auth } = require("../common/utils")

router.route("/posts")
.get(controller.getPosts)
.post(Auth, controller.addPost)

router.route("/posts/:pid")
.get(Auth, controller.getPost)
.put(Auth, controller.updatePost)
.delete(Auth, controller.deletePost)

module.exports = router