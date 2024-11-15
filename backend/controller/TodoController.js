const todoService = require('./../services/ToDoService');
let todos = [
    {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
    {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
    {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
    {userId: 1, id: 4, title: 'et porro tempora', completed: true}
];

async function getAllTodos(req,res,next){
    let todos = await todoService.getAllTodos();
    res.status(200).json(todos);
}

async function saveTodo(req,res,next){
    try {
        let todo = await todoService.saveTodo(req.body);
        res.status(201).json(req.body);
    }catch(err){
        res.status(400).json({
            errorMessage: err.message
        });
    }
}

async function updateTodo(req,res,next) {
    try {
        let id = req.params.id;
        let updatedTodo = await todoService.updateTodo(id, req.body);
        res.status(201).json(updatedTodo);
    }catch(err){
        res.status(400).json({errorMessage: err.toString()});
    }

}

async function getTodoById(req,res,next) {
    let id = req.params.id;
    try {
        let todo = await todoService.getTodoById(id);
        res.json(todo);
    }catch(err){
        res.status(404).json({error: "Id " + id + " not found"});
    }
}

async function deleteTodo(req,res,next) {
    try {
        let id = req.params.id;
        let deletedTodo = await todoService.deleteTodoById(id);
        res.status(201).json(deletedTodo);
    }catch(err){
        res.status(400).json({errorMessage: err.toString()});
    }

}

module.exports = {
    getAllTodos,
    saveTodo,
    updateTodo,
    getTodoById,
    deleteTodo
}; 