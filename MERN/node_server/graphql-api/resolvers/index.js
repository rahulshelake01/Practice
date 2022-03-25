'use strict'

const db = require("../../db")
const Posts = db.Posts

const resolvers = {
    Query: {
        getPosts: async () => {
            return await Posts.find({})
        }
    },
    Mutation: {
        addPost: async (_, {data}) => {
            let post = new Posts(data)
            let newPost = await post.save()
            if (!newPost) throw new Error("Failed to add post")
            return newPost
        },
        updatePost: async (_, {data}) => {
            let updatePost = await Posts.findByIdAndUpdate(data._id, data)
            if(!updatePost) throw new Error("Unable to update post")
            return {"msg":"Post updated successfully"}            
        },
        deletePost: async (_, {_id}) => {
            let delpost = await Posts.findOneAndDelete({_id})
            if (!delpost) throw new Error("Failed to delete post")
            return {"msg":"Post deleted successfully"}
        }
    }
}

module.exports = { resolvers }