const {
  filter,
  head,
  findIndex,
  assign,
  remove,
  forEach,
  eq,
  get,
  set,
  isEmpty
} = require('lodash');
const Task = require('./task.model');

class TaskRepo {
  constructor() {
    this.tasks = [
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
  }
  async getAll(boardId) {
    return filter(this.tasks, { boardId });
  }

  async getById(boardId, taskId) {
    return head(filter(this.tasks, { boardId, id: taskId }));
  }

  async create(boardId, data) {
    const newTask = new Task(data);
    this.tasks.push(newTask);
    return newTask;
  }

  async update(boardId, taskId, data) {
    const taskIndex = findIndex(this.tasks, { boardId, id: taskId });
    this.tasks[taskIndex] = assign(this.tasks[taskIndex], data);
    return this.tasks[taskIndex];
  }
  async delete(boardId, taskId) {
    const removedTask = remove(this.tasks, { boardId, id: taskId });

    if (isEmpty(removedTask)) {
      return false;
    }
    return true;
  }

  async removeUser(id) {
    forEach(this.tasks, (task, taskIndex) => {
      if (eq(get(task, 'userId'), id)) {
        set(this.tasks, `[${taskIndex}].userId`, null);
      }
    });
  }

  async removeByBoard(boardId) {
    remove(this.tasks, { boardId });
  }
}
module.exports = new TaskRepo();
