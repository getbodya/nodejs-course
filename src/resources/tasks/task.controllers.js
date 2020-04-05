const { isEmpty, isNil } = require('lodash');
const taskService = require('./task.service');

const getTasks = async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getTasks(boardId);

  if (isEmpty(tasks)) {
    res.status(404).send();
  } else {
    res.status(200).json(tasks);
  }
};

const createTask = async (req, res) => {
  const {
    body,
    params: { boardId }
  } = req;

  const task = await taskService.createTask(boardId, { ...body, boardId });
  res.status(200).json(task);
};

const getTask = async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTask(boardId, taskId);
  if (!isNil(task)) {
    res.status(200).json(task);
  } else {
    res.status(404).send({ error: 'Board not found' });
  }
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
  const isRemoved = await taskService.deleteTask(boardId, taskId);
  if (isRemoved) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
