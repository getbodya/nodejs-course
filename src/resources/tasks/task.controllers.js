const { map } = require('lodash');
const taskService = require('./task.service');
const Task = require('./task.model');

const getTasks = async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getTasks(boardId);
  res.json(map(tasks, Task.toResponse));
};

const createTask = async (req, res) => {
  const {
    body,
    params: { boardId }
  } = req;

  const task = await taskService.createTask(boardId, body);
  res.status(200).json(task);
};

const getTask = async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTask(boardId, taskId);
  console.log(task);
  res.status(200).json(task);
};

const updateTask = async (req, res) => {
  const {
    body,
    params: { boardId, taskId }
  } = req;
  const task = await taskService.updateTask(boardId, taskId, body);
  res.status(200).json(task);
};
const deleteTask = async (req, res) => {
  const { boardId, taskId } = req.params;
  await taskService.deleteTask(boardId, taskId);
  res.status(204).json();
};
module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
