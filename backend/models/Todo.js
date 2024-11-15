const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    complete: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todos', ToDoSchema, 'todos');   