import { useState } from "react";

export default function Counter() {
    console.log('render component');
    const [counter, setCounter] = useState(0);
    const incHandler = () => {
        setCounter(counter + 1);
        // counter++; immutable ဖြစ်လို့ ဒီလိုရေးလို့မရ
    }
    const decHandler = () => {
        setCounter(counter - 1);
    }
    return (<div>
        <button onClick={incHandler}>&nbsp;+ &nbsp;</button>
            Count { counter }
        <button onClick={decHandler}>&nbsp;- &nbsp;</button>
    </div>);
}