const mongoose = require('mongoose');
const User = mongoose.model('users');

let auth = (req, res, next) => {
  // Get token in client cookie
  let token = req.cookies.x_auth;
  // 토큰을 복호화한 후 유저를 찾는다
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.send({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
