const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getUser = userId => usersRepo.getById(userId);

const updateUser = (userId, data) => usersRepo.update(userId, data);

const createUser = data => usersRepo.create(data);

const deleteUser = userId => usersRepo.delete(userId);

module.exports = {
  getAll,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
