const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (roles) => {

  // Return middleware
  return (req, res, next) => {

    console.log('req.headers.authorization', req.headers.authorization);
    if (!req.headers.authorization) {
      return res.status(401).end();
    }

    // Get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];

    // Decode the token using a secret key-phrase
    return jwt.verify(token, config.jwtSecret, (err, decoded) => {

      // 401 not unauthorized
      if (err) return res.status(401).end();

      const userId = decoded.sub;

      // Check if user exists
      return User.findById(userId, (err2, user) => {
        if (err2 || !user) return res.status(401).end();

        if (roles) {
          if (roles.indexOf(user.role) > -1) return next();
          else return res.status(401).end();
        }

        return next();

      });
    });

  };
};
