const { find } = require('lodash');
const Board = require('./boards.model');

const boards = [
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

const getAll = async () => boards;

const createBoard = async boardData => {
  const newBoard = new Board(boardData);
  boards.push(newBoard);
  return newBoard;
};

const getBoard = async boardId => find(boards, { id: boardId });

module.exports = {
  getAll,
  createBoard,
  getBoard
};
