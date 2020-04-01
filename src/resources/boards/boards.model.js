const uuid = require('uuid');
const { map, set } = require('lodash');

class Board {
  constructor({ id = uuid(), title = 'default board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = this.mapColumns(columns);
  }

  mapColumns(columns) {
    return map(columns, column => {
      set(column, 'id', uuid());
      return column;
    });
  }
}

module.exports = Board;
