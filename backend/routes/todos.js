var express = require('express');
var router = express.Router();
var todos = require('../controller/TodoController.js');

router.get('/', todos.getAllTodos); // 200
router.post('/', todos.saveTodo); // 201
router.put('/:id', todos.updateTodo); 
router.get('/:id', todos.getTodoById);
router.delete('/:id', todos.deleteTodo);

module.exports = router;