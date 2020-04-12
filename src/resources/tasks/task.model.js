const uuid = require('uuid');

class Task {
  constructor({ id = uuid(), title, order = 0, description = '', userId = null, boardId, columnId = null } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId ? userId : null;
    this.boardId = boardId;
    this.columnId = columnId ? userId : null;
  }
}

module.exports = Task;
