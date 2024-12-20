export function Child() {
    return (<div>
        <h2>Child Component</h2>
    </div>)
}

export default function HelloWorld() {
    let string = "apple";
    return (<div>
        {/* <h1>Hello World</h1>
        <p>This is a paragraph</p>
        { string.toUpperCase() } */}
        <Child />
    </div>)
}