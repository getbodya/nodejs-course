const { map } = require('lodash');
const Board = require('./boards.model');
const TaskRepo = require('../tasks/task.db.repository');
const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findById(id);
};

const update = async (id, { title, columns }) => {
  return Board.update(
    { _id: id },
    {
      title,
      columns: map(columns, ({ title, order, id }) => ({ title, order, _id: id }))
    }
  );
};
const create = async data => {
  return Board.create(data);
};

const deleteById = async id => {
  const isRemove = (await Board.deleteOne({ _id: id })).deletedCount;
  if (isRemove) {
    await TaskRepo.removeByBoard(id);
  }
  return isRemove;
};
module.exports = { getAll, getById, update, create, deleteById };
