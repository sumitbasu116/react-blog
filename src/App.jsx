import { useEffect } from "react";
import { useState } from "react";

function App() {

  const[counter,setCounter] = useState(0);
  const[data,setData] = useState(1); 
  function callOnce(){
    console.log('callOnce function called');
  }
  useEffect(
    ()=>{
      counterFunction();
    },[counter]
  )
  function counterFunction(){
    console.log('counterFunction function called');
  }
  return (
    <div>
      <h1>useEffect hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Count{counter}</button>
      <button onClick={()=>setData(data+1)}>Data{data}</button>
    </div>
  )
}
export default App;