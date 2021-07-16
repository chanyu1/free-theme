const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const keys = require('./config/keys');
const { auth } = require('./middlewares/auth');
const { User } = require('./models/User');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => res.send("Hello World!"));

// app.get("/api/hello", (req, res) => {
//   res.send("hello~~");
// });

app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post('/api/users/login', (req, res) => {
  // 요청된 이메일을 DB에서 찾는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '해당 유저가 없습니다.',
      });
    }
    // 요청된 이메일이 DB에 있다면 비밀번호 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        });
      }
      // 비밀번호가 맞으면 토큰 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰 저장(쿠키, 로컬스토리지 등)
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

app.get('/api/users/auth', auth, (req, res) => {
  // 여기까지 미들웨어(auth)를 통과해 왔다는 얘기는 Authentication이 True라는 뜻
  res.status(200).json({
    _id: req.user._id,
    // 0은 일반유저, 그 외는 관리자
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Your app listening on port ${PORT}!`));
