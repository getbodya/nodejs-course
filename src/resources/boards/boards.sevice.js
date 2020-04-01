const boardRepo = require('./boards.memory.repository');

const getAll = () => boardRepo.getAll();

const createBoard = boardData => boardRepo.createBoard(boardData);

const getBoard = boardId => boardRepo.getBoard(boardId);

module.exports = {
  getAll,
  createBoard,
  getBoard
};
