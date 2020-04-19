const { isEmpty, isNil, map } = require('lodash');
const { ValidationError } = require('../../utils/validation-error');
const { NOT_FOUND, NO_CONTENT, OK } = require('http-status-codes');
const taskService = require('./task.service');
const Task = require('./task.model');

const getTasks = async (req, res, next) => {
  const { boardId } = req.params;
  const tasks = await taskService.getTasks(boardId);

  if (isEmpty(tasks)) {
    next(new ValidationError(NOT_FOUND));
  } else {
    res.status(OK).json(map(tasks, Task.toResponse));
  }
};

const createTask = async (req, res) => {
  const {
    body,
    params: { boardId }
  } = req;
  const task = await taskService.createTask({ ...body, boardId });
  res.status(OK).json(Task.toResponse(task));
};

const getTask = async (req, res, next) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTask(boardId, taskId);
  if (!isNil(task)) {
    res.status(OK).json(Task.toResponse(task));
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

const updateTask = async (req, res) => {
  const {
    body,
    params: { boardId, taskId }
  } = req;
  const task = await taskService.updateTask(boardId, taskId, body);
  res.status(OK).json(Task.toResponse(task));
};

const deleteTask = async (req, res, next) => {
  const { boardId, taskId } = req.params;
  const isRemoved = await taskService.deleteTask(boardId, taskId);
  if (isRemoved) {
    res.sendStatus(NO_CONTENT);
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
