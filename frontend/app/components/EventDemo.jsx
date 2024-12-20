'use client';
export default function EventDemo() {
    let handler = (event) => {
        console.log("clicked an event");
    }
    return (<div>
            <button type={"button"} onClick={handler}>click me</button>
    </div>)
}