const jwt = require('jsonwebtoken')
const { User } = require('../models')
function authentication(req,res,next) {
  if(req.headers.access_token) {
    res.status(401).json({
      message:'Auth Fail'
    })
  } else {
    try {
      payload = jwt.verify(req.headers.access_token,process.env.SECRET_KEY)
      User.findOne({
        where: {
          id: payload.id
        }
      })
      .then(user => {
        if(user) {
          req.loggedInUser = payload
          next()
        } else {
          res.status(401).json({
            message: "Access Denied"
          })
        }
      })
      .catch(e => {
        res.send(err)
      })
    } catch(e) {
      res.status(401).json({
        message:"Unauthorize Request"
      })
    }
  }
}
module.exports = authentication
