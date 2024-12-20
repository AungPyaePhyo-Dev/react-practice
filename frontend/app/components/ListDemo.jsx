
function ListItem(props) {
    return <div>
        {props.todo.title}
    </div>
}


export default function ListDemo({todos}) {
    return (<div>
        Todo List 
        {
            todos.map((todo) => <ListItem key={todo.id} todo={todo} />)   
        }
    </div>)
}