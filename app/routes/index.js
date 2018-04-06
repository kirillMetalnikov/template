var UsersHundler = require('../controllers/users')

const needLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.json({user: false, message: {type: 'login', text: 'You need login'}})
  }
}

module.exports = (app, passport) => {
  var usersHundler = new UsersHundler()

  app.route('/api/user/')
    .get(needLogin, usersHundler.current)

  app.route('/api/upload')
    .post(needLogin, (req, res) => {
      var imageFile = req.files.file
      var date = new Date()
      var filename = `${date.getTime()}-${Math.floor(Math.random() * 1000000)}.${imageFile.name.split('.').pop()}`
      imageFile.mv(`${__dirname}/../../../files/` + filename, (err) => {
        if(err) res.status(500).send(err)
        res.json({filePath: `/files/${filename}`})
      })
    } )

  app.route('/auth/logout')
    .get((req, res) => {
        req.logout()
        res.redirect('/')
    })

  app.route('/auth/login')
    .post(passport.authenticate('local', { failWithError: true }),
      (req, res) => {
        res.json({user: req.user})
      },
      (err, req, res, next) => {
        if (req.authErr) {
          res.send({message: req.authErr})
        }
      }
    )

}
