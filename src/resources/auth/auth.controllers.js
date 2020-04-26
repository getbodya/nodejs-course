const { FORBIDDEN } = require('http-status-codes');
const authService = require('./auth.service');
const userRepo = require('../users/user.db.repository');
const config = require('../../common/config');
const jwtTokenService = require('../../common/jwt-token.service');
const { ValidationError } = require('../../utils/validation-error');

const login = async (req, res, next) => {
  const { body } = req;
  const { login, password } = body;

  const userData = await userRepo.getByProp({ login });

  if (userData) {
    const isVerify = await authService.checkPassword(userData.password, password);

    if (isVerify) {
      const token = jwtTokenService.createToken({ login: userData.login, userId: userData._id });
      return res.header(config.HTTP_AUTH_HEADER, token).json({ token });
    }
  }
  next(new ValidationError(FORBIDDEN));
};

module.exports = { login };
