const { find, findIndex, assign, remove, isEmpty } = require('lodash');
const User = require('./user.model');
const TaskRepo = require('../tasks/task.memory.repository');

class UserRepo {
  constructor() {
    this.users = [
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
      }
    ];
  }
  async getAll() {
    return this.users;
  }

  async getById(id) {
    return find(this.users, { id });
  }

  async update(id, data) {
    const userIndex = findIndex(this.users, { id });
    this.users[userIndex] = assign(this.users[userIndex], data);
    return this.users[userIndex];
  }

  async create(data) {
    const user = new User(data);
    this.users.push(user);
    return user;
  }

  async delete(id) {
    const removedUser = remove(this.users, { id });
    if (isEmpty(removedUser)) {
      return false;
    }
    await TaskRepo.removeUser(id);
    return true;
  }
}

module.exports = new UserRepo();
