const dbConf = require("config").get("mongoDB")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || dbConf.url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.Promise = global.Promise;

module.exports = {
    User: require("../models/user.js"),
    Posts: require("../models/posts")
}