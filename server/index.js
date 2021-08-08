const express = require('express');
const cookieParser = require('cookie-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Postcard');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.Router());
app.use(cookieParser());

require('./routes/userRoutes')(app);
require('./routes/postcardRoutes')(app);

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
