import { useState } from "react";

const Counter = ()=>{

    const [count,setCount] = useState(0);
    const [rCount,setRCount] = useState(100);
    let counter = ()=>{
        setCount(count+1);
    }
    return (
        <div>
            <h2>Counter:{count}</h2>
            <h2>Rverse Counter:{rCount}</h2>
            <button onClick={counter}>Count</button>
            <button onClick={()=>setRCount(rCount-1)}>Rverse Count</button>
        </div>
    );

}

export default Counter; 