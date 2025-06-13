import { useState } from "react";
import Counter from "./Counter";


function App() {  

  const[counter,setCounter]=useState(0);
  const[data,setData]=useState(0);
  const[display,setDisplay]=useState(true);

  return (
    <div>
    
    {
      display?<Counter data={data} counter={counter}/>:null
    }
    <button onClick={()=>setCounter(counter+1)}>Counter</button>
    <button onClick={()=>setData(data+1)}>Data</button>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </div>
  )
}
export default App;