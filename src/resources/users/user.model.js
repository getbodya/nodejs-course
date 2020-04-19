const uuid = require('uuid');
const mongoose = require('mongoose');

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

const User = mongoose.model('User', userShema);

// class User {
//   constructor({ id = uuid(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
//     this.id = id;
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }

//   static toResponse(user) {
//     const { id, name, login } = user;
//     return { id, name, login };
//   }
// }

module.exports = User;
