const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const userSchema = new Schema({
  email: { type: String, trim: true, unique: 1 },
  password: { type: String, minlength: 5 },
  name: { type: String, maxlength: 50 },
  image: { type: String },
  role: { type: Number, default: 0 },
  token: { type: String },
  tokenExp: { type: Number },
  googleId: { type: String },
});

// 저장하기 전 실행
userSchema.pre('save', function (next) {
  // userSchema를 가리킴
  var user = this;
  // 비밀번호가 변환될 때만 실행
  if (user.isModified('password')) {
    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function (callback) {
  var user = this;
  // jsonwebtoken을 이용해서 토큰 생성
  var token = jwt.sign(user._id.toHexString(), 'secretToken');

  user.token = token;
  user.save(function (err, user) {
    if (err) {
      return callback(err);
    }
    callback(null, user);
  });
};

userSchema.statics.findByToken = function (token, callback) {
  var user = this;
  // 토큰을 decode
  jwt.verify(token, 'secretToken', function (err, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 후, token이 일치하는지 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) {
        return callback(err);
      }
      callback(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
