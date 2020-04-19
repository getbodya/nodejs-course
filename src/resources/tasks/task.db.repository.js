const Task = require('./task.model');

const getAll = async boardId => {
  return Task.find({ boardId });
};

const getById = async (boardId, taskId) => {
  return Task.findOne({ _id: taskId, boardId });
};

const update = async (boardId, taskId, data) => {
  return Task.updateOne({ _id: taskId, boardId }, data);
};
const create = async data => {
  return Task.create(data);
};

const deleteById = async (boardId, taskId) => {
  return !!(await Task.deleteOne({ _id: taskId, boardId })).deletedCount;
};

const removeUser = async userId => {
  return Task.updateMany({ userId }, { userId: null });
};

const removeByBoard = async boardId => {
  const del = await Task.deleteMany({ boardId }).exec();
  return del;
};
module.exports = { getAll, getById, update, create, deleteById, removeByBoard, removeUser };
