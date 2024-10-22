var express = require('express');
var router = express.Router();
var todos = require('../controller/TodoController.js');

router.get('/', todos.getAllTodos);
router.post('/', todos.saveTodo);
router.put('/:id', todos.updateTodo);
router.get('/:id', todos.getTodoById);
// router.post('/:id', todos.deleteTodo);

module.exports = router;