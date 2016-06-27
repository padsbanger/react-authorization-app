const mongoose = require('mongoose'),
  Schema = mongoose.Schema
  bcrypt = require('bcrypt-nodejs')
  userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
  })

userSchema.pre('save', function(next) {
  const user = this

  bcrypt.genSalt(10, function(err, salt) {

    bcrypt.hash(user.password, salt, null, function(err, hash) {

      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if(err) {return cb(err)}

    cb(null, isMatch)
  })
}

const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass
