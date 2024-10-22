let todos = [
    {userId: 1, id: 1, title: 'delectus aut autem', completed: false},
    {userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false},
    {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false},
    {userId: 1, id: 4, title: 'et porro tempora', completed: true}
];

async function getAllTodos(req,res,next){
    console.log("API todos routes");
    res.json(todos);
}

async function saveTodo(req,res,next){
    console.log("Post Todo", req.body);
    res.status(201).json(req.body);
}

async function updateTodo(req,res,next) {
    console.log("Todo id", req.params.id);
    res.status(201).json(req.params.id);
}

async function getTodoById(req,res,next) {
    console.log("Todo id", req.params.id);
    let id = req.params.id;
    let todo =  todos.find(todo => todo.id == id);
    res.json(todo);
}


module.exports = {
    getAllTodos,
    saveTodo,
    updateTodo,
    getTodoById
}; 