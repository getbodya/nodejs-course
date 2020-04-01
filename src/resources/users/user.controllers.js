const { isNil } = require('lodash');
const User = require('./user.model');
const usersService = require('./user.service');

const getUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
};

const getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.getUser(userId);
  if (!isNil(user)) {
    res.json(User.toResponse(user));
  } else {
    res.json({});
  }
};

const updateUser = async (req, res) => {
  const {
    body,
    params: { userId }
  } = req;
  const user = await usersService.updateUser(userId, body);
  if (!isNil(user)) {
    res.json(User.toResponse(user));
  } else {
    res.json({});
  }
};

const createUser = async (req, res) => {
  const { body } = req;
  const user = await usersService.createUser(body);
  res.json(User.toResponse(user));
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  await usersService.deleteUser(userId);
  res.status(204).send();
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
