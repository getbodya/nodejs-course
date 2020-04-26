const { includes, trim } = require('lodash');
const config = require('./config');
const jwt = require('jsonwebtoken');

class JwtTokenService {
  tokens = [];

  verify(token) {
    return includes(this.tokens, trim(token));
  }

  set(token) {
    this.tokens.push(token);
  }

  createToken(payload) {
    const token = jwt.sign(payload, config.JWT_SECRET_KEY);
    this.set(token);
    return token;
  }
}

module.exports = new JwtTokenService();
