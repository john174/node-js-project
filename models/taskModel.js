const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  description: String,
  status: { type: String, enum: ['pending', 'in progress', 'completed'], default: 'pending' },
  deadline: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'User reference is required'] }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
