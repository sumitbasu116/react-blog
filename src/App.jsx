
import { useRef } from "react";
import UserInput from "./UserInput";
function App() {
  
  const inputRef = useRef(null);

  const handleInput=()=>{
    inputRef.current.value=100;
    inputRef.current.focus()
  }
  
  return (
    <div>
      <UserInput ref={inputRef}/>
      <button onClick={handleInput}>Set Input</button>
    </div>
  )
}
export default App;