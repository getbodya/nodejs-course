const { isNil } = require('lodash');
const { ValidationError } = require('../../utils/validation-error');
const { BAD_REQUEST, NOT_FOUND, NO_CONTENT } = require('http-status-codes');
const { includesFields } = require('../../utils/check-body');

const User = require('./user.model');
const usersService = require('./user.service');

const getUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
};

const getUser = async (req, res, next) => {
  const { userId } = req.params;
  const user = await usersService.getUser(userId);

  if (!isNil(user)) {
    res.status(200).json(User.toResponse(user));
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

const updateUser = async (req, res, next) => {
  const {
    body,
    params: { userId }
  } = req;
  const user = await usersService.updateUser(userId, body);
  if (!isNil(user)) {
    res.json(User.toResponse(user));
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

const createUser = async (req, res, next) => {
  const { body } = req;
  if (includesFields(body, 'name', 'login', 'password')) {
    const user = await usersService.createUser(body);
    res.json(User.toResponse(user));
  } else {
    next(new ValidationError(BAD_REQUEST));
  }
};

const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  const isRemoved = await usersService.deleteUser(userId);
  if (isRemoved) {
    res.status(NO_CONTENT).send('The user has been deleted');
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
