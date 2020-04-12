const router = require('express').Router();
const { getTasks, createTask, getTask, updateTask, deleteTask } = require('./task.controllers');

router.route('/:boardId/tasks').get(getTasks);
router.route('/:boardId/tasks').post(createTask);
router.route('/:boardId/tasks/:taskId').get(getTask);
router.route('/:boardId/tasks/:taskId').put(updateTask);
router.route('/:boardId/tasks/:taskId').delete(deleteTask);

module.exports = router;
