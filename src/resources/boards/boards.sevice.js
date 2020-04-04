const boardRepo = require('./boards.memory.repository');

const getAll = () => boardRepo.getAll();

const createBoard = boardData => boardRepo.createBoard(boardData);

const getBoard = boardId => boardRepo.getBoard(boardId);

const updateBoard = (boardId, body) => boardRepo.updateBoard(boardId, body);

const deleteBoard = boardId => boardRepo.deleteBoard(boardId);

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
