const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'dafaultTaskTitle',
    order = 1,
    description = 'defaultTaskDesc',
    userId = '1',
    boardId = 'boadrdId1',
    columnId = '1-2-column'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;
