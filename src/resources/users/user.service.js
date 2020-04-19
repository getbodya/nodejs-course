const usersRepo = require('./user.db.repository');

const getAll = () => usersRepo.getAll();

const getUser = userId => usersRepo.getById(userId);

const updateUser = (userId, data) => usersRepo.update(userId, data);

const createUser = data => usersRepo.create(data);

const deleteUser = userId => usersRepo.deleteById(userId);

module.exports = {
  getAll,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
