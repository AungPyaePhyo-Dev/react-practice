import { useState } from "react";

export default function ImmutableState() {
    console.log("ImmutableState");
    const [state, setState] = useState("Hello");
    const handler = () => {
        setState(new String("Hello"));
    }

    return (<div>
        <h1>{state}</h1>
        <button onClick={handler}>Change State</button>
    </div>)
}