const validations = require('../middleware/model-validations');

module.exports = {

  // DB
  dbUri: 'mongodb://localhost:27017/role-base',

  // jsonwebtoken secret
  jwtSecret: '!!secret phrase!!',

  // Model validations
  validations // :validations
};
