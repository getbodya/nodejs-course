const { find, findIndex, assign, remove, size } = require('lodash');
const Board = require('./boards.model');

class BoardRepo {
  constructor() {
    this.boards = [
      {
        id: 'boadrdId1',
        title: '1board',
        columns: [
          {
            id: '1-1-column',
            title: '1column',
            order: 0
          },
          {
            id: '1-2-column',
            title: '2column',
            order: 1
          },
          {
            id: '1-3-column',
            title: '3column',
            order: 2
          }
        ]
      },
      {
        id: 'boadrdId2',
        title: '2board',
        columns: [
          {
            id: '2-1-column',
            title: '1column',
            order: 0
          },
          {
            id: '2-2-column',
            title: '2column',
            order: 1
          },
          {
            id: '2-3-column',
            title: '3column',
            order: 2
          }
        ]
      }
    ];
  }

  async getAll() {
    return this.boards;
  }

  async getById(id) {
    return find(this.boards, { id });
  }

  async create(data) {
    const newBoard = new Board(data);
    this.boards.push(newBoard);
    return newBoard;
  }

  async update(boardId, data) {
    const boardIndex = findIndex(this.boards, { id: boardId });
    this.boards[boardIndex] = assign(this.boards[boardIndex], data);
    return this.boards[boardIndex];
  }

  async delete(boardId) {
    const removedBoard = remove(this.boards, { id: boardId });
    if (size(removedBoard)) {
      return true;
    }
    return false;
  }
}

module.exports = new BoardRepo();
