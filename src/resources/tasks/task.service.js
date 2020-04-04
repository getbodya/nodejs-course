const tasksRepo = require('./task.memory.repository');

const getTasks = boardId => tasksRepo.getTasks(boardId);

const createTask = (boardId, body) => tasksRepo.createTask(boardId, body);

const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);

const updateTask = (boardId, taskId, body) =>
  tasksRepo.updateTask(boardId, taskId, body);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
