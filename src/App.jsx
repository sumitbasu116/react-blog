import { useState } from "react";
import Counter from "./Counter";


function App() {  

  const[counter,setCounter]=useState(0);
  const[data,setData]=useState(0);

  return (
    <div>

    <Counter data={data} counter={counter}/>
    <button onClick={()=>setCounter(counter+1)}>Counter</button>
    <button onClick={()=>setData(data+1)}>Data</button>
    </div>
  )
}
export default App;