const USER = require('../models/user');
const jwt = require('jsonwebtoken');

// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const home = 'http://localhost:3001/home/';
// Sing UP
exports.createNewUser = async (req, res, next) => {
  try {
    const { userName } = req.body;
    const { passWord } = req.body;
    if (await USER.exists({ userName: userName })) {
      throw { status: 401, messege: 'user name must be unique' };
      // res.status(401).send('user name must be unique');
    } else {
      const newUsername = await USER.create({
        userName: userName,
        passWord: passWord,
      });
      res.status(200).json(newUsername);
    }
  } catch (error) {
    next(error);
  }
};

// Log In
exports.login = async (req, res, next) => {
  try {
    const { userName, passWord } = req.body;
    const username = await USER.find({
      userName: userName,
      passWord: passWord,
    });
    if (username.length === 0) {
      throw { status: 401, messege: 'user name or password not right' };
    } else {
      const user = { userName, passWord };
      const token = generateAccessToken(user);
      return res.status(200).cookie('token', token).send(home); // maxAge : 3600
    }
    // res.status(200).json(username);
  } catch (error) {
    next(error);
  }
};

function generateAccessToken(user) {
  return jwt.sign({ user }, 'secret', {
    expiresIn: '3600s',
  });
}

function checkToken(req, res, next) {
  const token = req.cookie.token;
  if (!token) {
    return res.status(301).redirect('/api/login');
  } else {
    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        res.status(301).redirect('/api/login');
      }
      next();
    });
  }
}
