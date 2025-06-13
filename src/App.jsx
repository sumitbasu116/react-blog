import { useState } from "react";
import Counter from "./Counter";

function App() {  

  const[counter,setCounter] = useState(0);

  return (
    <div>
      
      <Counter data={counter}/>
      <button onClick={()=>setCounter(counter+1)}>Counter</button>
    </div>
  )
}
export default App;