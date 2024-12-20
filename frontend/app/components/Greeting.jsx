export default function Greeting(props) {
    let message = "Hello";
    let styles = {
        color: 'red',
        backgroundColor: 'lightblue'
    }
    return (<div style={styles}>
        <h1>{props.message.toUpperCase()}</h1>
    </div>)
}