const tasksRepo = require('./task.memory.repository');

const getTasks = boardId => tasksRepo.getAll(boardId);

const createTask = (boardId, body) => tasksRepo.create(boardId, body);

const getTask = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

const updateTask = (boardId, taskId, body) =>
  tasksRepo.update(boardId, taskId, body);

const deleteTask = (boardId, taskId) => tasksRepo.delete(boardId, taskId);

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
