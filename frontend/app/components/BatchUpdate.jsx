import { useState } from "react";

export default function BatchUpdate(props)  {
    const [counter, setCounter] = useState(0);
    return (<div>
        <button onClick={() => {
            setCounter(counter + 1);
            setCounter(counter + 2);
            setCounter(counter + 3);
        }}>Batch Update</button>
        Counter: {counter}
    </div>)
}