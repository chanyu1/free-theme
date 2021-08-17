const { auth } = require('../middlewares/auth');

const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/users/auth', auth, (req, res) => {
    return res.status(200).send({
      _id: req.user._id,
      // 0은 일반유저, 그 외는 관리자
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      image: req.user.image,
      role: req.user.role,
    });
  });

  app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, user) => {
      if (err) return res.send({ success: false, err });

      return res.status(200).send({ success: true });
    });
  });

  app.post('/api/users/login', (req, res) => {
    // 요청된 이메일을 DB에서 찾는다
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) return res.send({ success: false, err });
      if (!user) {
        return res.send({
          success: false,
          message: 'No such user exists.',
        });
      }
      // 요청된 이메일이 DB에 있다면 비밀번호 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return res.send({ success: false, err });
        if (!isMatch) {
          return res.send({
            success: false,
            message: 'Password is incorrect.',
          });
        }
        // 비밀번호가 맞으면 토큰 생성
        user.generateToken((err, user) => {
          if (err) return res.send({ success: false, err });
          // Save token in client cookie
          return res.cookie('x_auth', user.token).status(200).send({
            success: true,
            userId: user._id,
          });
        });
      });
    });
  });

  app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
      if (err) return res.send({ success: false, err });

      return res.status(200).send({ success: true });
    });
  });
};
