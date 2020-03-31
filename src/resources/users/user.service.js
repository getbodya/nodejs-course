const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUser = userId => usersRepo.getById(userId);

const updateUser = (userId, data) => usersRepo.putById(userId, data);

const createUser = (userId, data) => usersRepo.createUser(userId, data);

const deleteUser = userId => usersRepo.deleteUser(userId);

module.exports = {
  getAll,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
