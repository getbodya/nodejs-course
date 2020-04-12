const router = require('express').Router();
const { getUsers, getUser, updateUser, createUser, deleteUser } = require('./user.controllers');

router.route('/').get(getUsers);
router.route('/').post(createUser);
router.route('/:userId').get(getUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);

module.exports = router;
