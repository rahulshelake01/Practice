const bcrypt = require("bcryptjs")
const utils = require("../common/utils")
const db = require("../db")
const User = db.User

const register = async (req, resp, next) => {

    let data = req.body
    const user = new User(data)

    if (await User.findOne({username:user.username})) {
        return resp.status(400).json({error:"User already registered."})
    }

    user.save(function(err, user) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message:"User registered successfully."})
        }
    })
}

const login = async (req, resp) => {
    let data = req.body
    let user = await User.findOne({username:data.username})
    if (user) {
        if (bcrypt.compareSync(data.password, user.password)) {
            let userObj = user.toObject()
            userObj.token = await utils.getAccessToken(user)
            resp.status(200).json({userObj})
        }
        else{
            resp.status(400).json({error:"Invalid credentials"})
        }
    }
    else {
        resp.status(400).json({error:"User not found"})
    }
}

module.exports = {
    register,
    login
}