const uuid = require('uuid');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../../common/config');
const { set } = require('lodash');
const userShema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  _id: {
    type: String,
    default: uuid
  }
});

userShema.statics.toResponse = ({ _id, name, login }) => ({ id: _id, name, login });

userShema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, config.SALT);
  next();
});

const User = mongoose.model('User', userShema);

module.exports = User;
