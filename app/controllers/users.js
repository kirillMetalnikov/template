var User = require('../models/User')

function UsersHundler() {

  this.current = function (req, res) {
    User
      .findOne({_id: req.user._id})
      .exec( (err, result) => {
        if (err) { res.json({message: {type: 'error', text: err}}) }
        res.json({user: result})
      })
  }

}

module.exports = UsersHundler
