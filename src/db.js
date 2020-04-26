const mongoose = require('mongoose');
const { MONGO_CONNECTION_STRING } = require('./common/config');
const User = require('./resources/users/user.model');

mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

const dbConnection = cb => {
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    db.dropDatabase().then(() => {
      User.create({
        name: 'Admin',
        login: 'admin',
        password: 'admin'
      });
    });
    console.log("we're connected!");
    cb();
  });
};

module.exports = {
  dbConnection
};
