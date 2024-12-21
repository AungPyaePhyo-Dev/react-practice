import { useState } from "react";

let id = 1;
export default function ListUpdate() {
    const [todos, setTodos] = useState([{
        id: id,
        title: 'New Task 1',
        completed: false
    }]);

   

    const handler = () => {
        id++;

        let newTodo = {
            id: todos.length + 1,
            title: 'New Task' + id,
            completed: true
        }

        setTodos([...todos, newTodo]);
    }

    const deleteHandler = (item) => {
        setTodos(todos.filter((todo) => todo.id!== item.id));
    }

    const updateHandler = (item) => {
        let updateTodo = {
            ...item,
            title: 'Updated'
        }
        setTodos(todos.map((todo) => todo.id === item.id? updateTodo : todo));
    }
        

    // todo.push not work 
    return (<div>
        Add Todo
        <button onClick={handler}>Add Task</button>
        {todos.map((todo) => <div key={todo.id}>
            {todo.title} - {todo.completed? 'Completed' : 'Not Completed'}
            <button onClick={() => updateHandler(todo)}>Update</button>
            <button onClick={() => deleteHandler(todo)}>Delete</button>
        </div>)}
    </div>)
}