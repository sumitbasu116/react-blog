import { useState } from "react";
import Counter from "./Counter";

function App(){
let [fruit,setFruit] = useState("Apple");
let handleFruit = ()=>{
  setFruit("Banana");
};
return (
  <div>
    <h1>React JS State</h1>
    <h2>{fruit}</h2>
    <button onClick={handleFruit}>change fruit</button>
    <Counter/>
  </div>
)
}

export default App;