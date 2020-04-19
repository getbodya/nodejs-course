const mongoose = require('mongoose');
const uuid = require('uuid');

const taskShema = new mongoose.Schema({
  title: String,
  order: Number,
  description: String,
  userId: String,
  boardId: String,
  columnId: String,
  _id: {
    type: String,
    default: uuid
  }
});
taskShema.statics.toResponse = ({ _id, title, order, description, userId, boardId, columnId }) => ({
  id: _id,
  title,
  order,
  description,
  userId,
  boardId,
  columnId
});
const Task = mongoose.model('Task', taskShema);

module.exports = Task;
