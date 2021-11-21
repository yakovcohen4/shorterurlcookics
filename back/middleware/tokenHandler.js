const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(301).redirect('/');
  } else {
    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        return res.status(301).redirect('/');
      }
      next();
    });
  }
}

module.exports = { checkToken };
