const { filter, head, findIndex, assign, remove } = require('lodash');
const Task = require('./task.model');

const mockTasks = [
  {
    id: '1tasksId',
    title: '1task',
    order: 1,
    description: '1task description',
    userId: '1',
    boardId: 'boadrdId1',
    columnId: '1-1-column'
  },
  {
    id: '2tasksId',
    title: '2task',
    order: 2,
    description: '2task description',
    userId: '1',
    boardId: 'boadrdId1',
    columnId: '1-2-column'
  },
  {
    id: '3tasksId',
    title: '3task',
    order: 3,
    description: '3task description',
    userId: '1',
    boardId: 'boadrdId1',
    columnId: '1-3-column'
  },
  {
    id: '4tasksId',
    title: '4task',
    order: 1,
    description: '4task description',
    userId: '2',
    boardId: 'boadrdId2',
    columnId: '2-1-column'
  },
  {
    id: '5tasksId',
    title: '5task',
    order: 2,
    description: '5task description',
    userId: '2',
    boardId: 'boadrdId2',
    columnId: '2-2-column'
  },
  {
    id: '6tasksId',
    title: '6task',
    order: 3,
    description: '6task description',
    userId: '2',
    boardId: 'boadrdId2',
    columnId: '2-3-column'
  }
];

const getTasks = async boardId => filter(mockTasks, { boardId });

const createTask = async (boardId, body) => {
  const newTask = new Task(body);
  mockTasks.push(newTask);
  return Task.toResponse(newTask);
};

const getTask = async (boardId, taskId) =>
  Task.toResponse(head(filter(mockTasks, { boardId, id: taskId })));

const updateTask = async (boardId, taskId, body) => {
  const taskIndex = findIndex(mockTasks, { boardId, id: taskId });
  mockTasks[taskIndex] = assign(mockTasks[taskIndex], body);
  return Task.toResponse(mockTasks[taskIndex]);
};

const deleteTask = async (boardId, taskId) => {
  remove(mockTasks, { boardId, id: taskId });
};
module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};
