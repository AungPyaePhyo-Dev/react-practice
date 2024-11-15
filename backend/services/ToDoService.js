const Todo = require('./../models/Todo');

async function getAllTodos() {
    let todo = Todo.find();
    return todo;
}

async function getTodoById(id) {
    let todo = Todo.findById(id);
    return todo;
}

async function saveTodo(todo) {
    let newTodo = new Todo(todo);
    return newTodo.save();
}

async function updateTodo(id, todo){
    let existingTodo = await Todo.findById(id);
    if(!existingTodo) {
        throw new Error('Todo id' + id +' not found');
    }else {
        return Todo.findByIdAndUpdate(id, todo,{new: true}); // new true will return updated data
    }
}

async function deleteTodoById(id) {
    let existingTodo = await Todo.findById(id);
    if(!existingTodo) {
        throw new Error('Todo id' + id +' not found');
    }else {
        return Todo.findByIdAndDelete(id); // new true will return updated data
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodoById
}