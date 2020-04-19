const uuid = require('uuid');
const { map } = require('lodash');
const mongoose = require('mongoose');

const columnShema = new mongoose.Schema({
  title: String,
  order: Number,
  _id: {
    type: String,
    default: uuid
  }
});

const boardShema = new mongoose.Schema({
  title: String,
  columns: [columnShema],
  _id: {
    type: String,
    default: uuid
  }
});

boardShema.statics.toResponse = board => {
  const { _id, title, columns } = board;
  return {
    id: _id,
    title,
    columns: map(columns, ({ title, order, _id }) => ({ title, order, id: _id }))
  };
};

const Board = mongoose.model('Board', boardShema);

module.exports = Board;
