const { isNil } = require('lodash');
const { ValidationError } = require('../../utils/validation-error');
const { NOT_FOUND, NO_CONTENT, getStatusText } = require('http-status-codes');
const boardService = require('./boards.sevice');
const Board = require('./boards.model');

const getBoards = async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
};

const createBoard = async (req, res) => {
  const { body } = req;
  const newBoard = await boardService.createBoard(body);
  res.json(Board.toResponse(newBoard));
};

const getBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const board = await boardService.getBoard(boardId);
  if (!isNil(board)) {
    res.json(Board.toResponse(board));
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

const updateBoard = async (req, res, next) => {
  const {
    body,
    params: { boardId }
  } = req;

  const board = await boardService.updateBoard(boardId, body);
  if (!isNil(board)) {
    res.json(Board.toResponse(board));
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

const deleteBoard = async (req, res, next) => {
  const { boardId } = req.params;
  const isRemoved = await boardService.deleteBoard(boardId);
  if (isRemoved) {
    res.status(NO_CONTENT).send(getStatusText(NO_CONTENT));
  } else {
    next(new ValidationError(NOT_FOUND));
  }
};

module.exports = {
  getBoards,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
