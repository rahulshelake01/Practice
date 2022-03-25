const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
})

module.exports = mongoose.model("Post", schema)