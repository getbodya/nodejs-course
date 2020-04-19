const tasksRepo = require('./task.db.repository');

const getTasks = boardId => tasksRepo.getAll(boardId);

const createTask = body => tasksRepo.create(body);

const getTask = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

const updateTask = (boardId, taskId, body) => tasksRepo.update(boardId, taskId, body);

const deleteTask = (boardId, taskId) => tasksRepo.deleteById(boardId, taskId);

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
