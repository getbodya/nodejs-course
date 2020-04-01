const { isNil } = require('lodash');
const boardService = require('./boards.sevice');

const getBoards = async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
};

const createBoard = async (req, res) => {
  const { body } = req;
  const newBoard = await boardService.createBoard(body);
  res.json(newBoard);
};

const getBoard = async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.getBoard(boardId);
  if (!isNil(board)) {
    res.json(board);
  } else {
    res.json({});
  }
};

module.exports = {
  getBoards,
  createBoard,
  getBoard
};
