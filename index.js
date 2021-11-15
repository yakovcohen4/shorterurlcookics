const PORT = process.env.PORT || 3000;
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const mongo = process.env.DATABASE;

//connecting to database
mongoose
  .connect(mongo)
  .then(result => {
    console.log('connected to MongoDB');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });

const urlsRouter = require('./back/routers/urlRouter');
const { urlHandler } = require('./back/middleware/urlHandler');
const { errorHandler } = require('./back/middleware/errorHandler');

// add cors app
app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json()); // use json
app.use(cookieParser()); // use cookie

// Home Page
app.use('/', express.static(`./front/dist`));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front/dist/index.html');
});
// // Home Page
// app.use('/', express.static(`./front/dist`));
// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/front/dist/login.html');
// });

// error url
app.use(urlHandler);

app.use('/api', urlsRouter);

// error hadler
app.use(errorHandler);

// Listening on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
