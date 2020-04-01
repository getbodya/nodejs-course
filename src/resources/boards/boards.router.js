const router = require('express').Router();
const { getBoards, createBoard, getBoard } = require('./boards.controllers');

router.route('/').get(getBoards);
router.route('/').post(createBoard);
router.route('/:boardId').get(getBoard);

module.exports = router;
