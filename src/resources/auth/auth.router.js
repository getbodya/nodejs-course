const router = require('express').Router();
const { login } = require('./auth.controllers');

router.route('/').post(login);

module.exports = router;
