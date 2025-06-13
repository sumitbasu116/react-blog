import { useState } from "react";

function App() {

  const[counter,setCounter] = useState(0); 
  function callOnce(){
    console.log('callOnce function called');
  }
  callOnce();
  return (
    <div>
      <h1>useEffect hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Count{counter}</button>
    </div>
  )
}
export default App;