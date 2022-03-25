const jwt = require('jsonwebtoken')
const config = require("config")

const getAccessToken = async(user) => {

    let payload = {
        uid: user._id,
        username:user.usrname,
        first_name: user.first_name,
        last_name: user.last_name
    }

    let options = {
        expiresIn: '2d'
    }

    return jwt.sign(payload, config.jwt_secret, options)
}

const Auth = async(req, resp, next) => {
    let token = req.headers.authorization;
    if (token) {
        try {
            jwt.verify(token, config.jwt_secret)
            next()
        }
        catch(e) {
            resp.status(401).json({error:"Access denied"})    
        }
    }
    else {
        resp.status(401).json({error:"Access denied"})    
    }
}

module.exports = {
    getAccessToken,
    Auth
}