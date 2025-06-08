import { useState } from "react";
function App(){
const[val,setVal] = useState('Sumit Basu');
return (
  <div>
    <h1>React JS Get Input Field Value</h1>
    <input type="text" value={val} onChange={(event)=>setVal(event.target.value)}/>
    <br />
    <br />
    <h2>{val}</h2>
    <button onClick={()=>setVal("")}>Clear</button>
  </div>
)
}

export default App;