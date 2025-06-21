
import { useRef } from "react";

function App() {
  
  const inputRef = useRef(null);

  const handleInput=()=>{
    inputRef.current.value=100;
    inputRef.current.focus()
  }
  
  return (
    <div>
      <input type="text" ref={inputRef}/>
      <br /><br />
      <button onClick={handleInput}>Set Input</button>
    </div>
  )
}
export default App;