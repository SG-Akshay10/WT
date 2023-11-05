import { useState } from "react";
import CounterButton from "../button";
import Header from "../header";

function Counter()
{
    const[count,setCount] = useState(0);
    const counterStyle = {
        padding: "20em",    
    }

    return(
        <>
        <div style={counterStyle}>
            <Header name="Counter Application"/>
            <Header name={count} />
            <CounterButton name="Increment" color="success" fun={() => setCount(count+1)}/>
            <CounterButton name="Decrement" color="danger" fun={() => setCount(count-1)} condition={count===0}/>
            <CounterButton name="Reset" color="secondary" fun={() => setCount(0)} condition={count===0}/>
        </div>
        </>
    );
}

export default Counter;