const router = require('express').Router();
const { getBoards, createBoard, getBoard, updateBoard, deleteBoard } = require('./boards.controllers');

router.route('/').get(getBoards);
router.route('/').post(createBoard);
router.route('/:boardId').get(getBoard);
router.route('/:boardId').put(updateBoard);
router.route('/:boardId').delete(deleteBoard);

module.exports = router;
