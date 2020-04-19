const User = require('./user.model');
const TaskRepo = require('../tasks/task.db.repository');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findById(id);
};

const update = async (id, data) => {
  return User.updateOne({ _id: id }, data);
};
const create = async data => {
  return User.create(data);
};

const deleteById = async id => {
  const isRemove = !!(await User.deleteOne({ _id: id })).deletedCount;
  if (isRemove) {
    await TaskRepo.removeUser(id);
  }
  return isRemove;
};

module.exports = { getAll, getById, update, create, deleteById };
