import { useState } from "react";


function TodoItem({todo, onDelete, onUpdate}) {
    const [editMode, setEditMode] = useState(false);
    const [todoText, setTodoText] = useState(todo.title);
    const onChangeHandler = (event) => {
        setTodoText(event.target.value);
    }
    const onEditBtnClick = () => {
        if(editMode) {
            const todoToUpdate = {
                ...todo,
                title: todoText
            }
            onUpdate(todoToUpdate);
        }
        setEditMode(!editMode);
    }

    return <div key={todo.id}>
                {/* {todo.title} */}
                { editMode ? <input type={"text"} value={todoText} onChange={onChangeHandler} /> : todoText }
                &nbsp;
                <button type="button" className={"btn btn-primary"} onClick={onEditBtnClick}>
                    { !editMode ? 'Edit' : 'Update' }
                </button>
                &nbsp;
                <button type="button" className={"btn btn-danger"} onClick={onDelete}>Delete</button>
            </div>
}


function TodoInput({addTodo}) {
    const [newTodo, setNewTodo] = useState('');

    const newTodoOnchangeHandler = (event) => {
        setNewTodo(event.target.value);
    }

    const onAddHandler = () => {
        addTodo(newTodo);
        setNewTodo('');
    }

    return (<div>
        <form>
            <div className="form-group">
                <label>Todo</label>
                <input 
                    className="form-control"
                    value={newTodo}
                    onChange={newTodoOnchangeHandler}  />
            </div>
            <div className="form-group">
                <button type="button" 
                    className="btn btn-primary"
                    onClick={onAddHandler}
                    >Add</button>
            </div>
        </form>
    </div>)
}

function TodoList({todos,onDelete, onUpdate}) {
    return (<div>
        {
            todos.map(todo=> <TodoItem key={todo.id} todo={todo} onDelete={() => onDelete(todo)} onUpdate={onUpdate} />)
        }
    </div>);
}

export default function TodoContainer() {
    console.log("Rendered");
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Task 1'
        },
        {
            id: 2,
            title: 'Task 2'
        }
    ]);

    const addNewTodo = (todo) => {
        console.log("Add new Todo ", todo);
        const newTodo = {
            id: crypto.randomUUID(),
            title: todo
        }
        setTodos([...todos, newTodo]);
    }


    const onDeleteHandler = (todoToDelete) => {
        console.log(todoToDelete);
        setTodos(todos.filter(todo=>todo.id !== todoToDelete.id));
    }

    const onUpdateHandler = (todoToUpdate) => {
        const newTodos = todos.map(todo=> todo.id == todoToUpdate ? todoToUpdate : todo);
        setTodos(newTodos);
    }

    return (<div>
        Todo Container
        <TodoInput addTodo={addNewTodo}/>
        <TodoList todos={todos} onDelete={onDeleteHandler} onUpdate={onUpdateHandler} />
        
    </div>)
}