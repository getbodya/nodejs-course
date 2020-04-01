const { find, findIndex, assign, remove } = require('lodash');
const User = require('./user.model');

const users = [
  {
    id: '1',
    name: 'USER',
    login: 'user',
    password: 'P@55w0rd'
  },
  {
    id: '2',
    name: 'USER2',
    login: 'user2',
    password: 'P@22w0rd'
  },
  {
    id: '3',
    name: 'USER3',
    login: 'user3',
    password: 'P@33w0rd'
  }
];

const getAll = async () => users;

const getUser = async userId => find(users, { id: userId });

const updateUser = async (userId, data) => {
  const userIndex = findIndex(users, { id: userId });
  users[userIndex] = assign(users[userIndex], data);
  return users[userIndex];
};
const createUser = async data => {
  const user = new User(data);
  users.push(user);
  return user;
};
const deleteUser = async userId => {
  remove(users, { id: userId });
};

module.exports = {
  getAll,
  getUser,
  updateUser,
  createUser,
  deleteUser
};
