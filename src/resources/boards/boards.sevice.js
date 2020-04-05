const boardRepo = require('./boards.memory.repository');

const getAll = () => boardRepo.getAll();

const createBoard = boardData => boardRepo.create(boardData);

const getBoard = boardId => boardRepo.getById(boardId);

const updateBoard = (boardId, body) => boardRepo.update(boardId, body);

const deleteBoard = boardId => boardRepo.delete(boardId);

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
