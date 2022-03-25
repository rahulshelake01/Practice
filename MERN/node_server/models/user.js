const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const schema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    created_at: {type: Date, default: Date.now()}
})

schema.pre('save', async function(next){
    if (this.isModified(this.password) || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

module.exports = mongoose.model("User", schema)