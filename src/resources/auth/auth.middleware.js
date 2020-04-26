const authService = require('./auth.service');
const config = require('../../common/config');
const { ValidationError } = require('../../utils/validation-error');
const { UNAUTHORIZED } = require('http-status-codes');
const { split } = require('lodash');
const jwtTokenService = require('../../common/jwt-token.service');

const authMiddleware = async (req, res, next) => {
  const token = req.header(config.HTTP_AUTH_HEADER);

  if (!token) {
    return next(new ValidationError(UNAUTHORIZED));
  }

  const [sheme, clearToken] = split(token, ' ');

  if (!jwtTokenService.verify(clearToken)) {
    return next(new ValidationError(UNAUTHORIZED));
  }

  next();
};

module.exports = { authMiddleware };
