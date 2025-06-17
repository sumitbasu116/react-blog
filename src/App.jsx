import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  const inputHandler=()=>{
    console.log(inputRef);
    
  }

  return (
    <div>
      <h1>useRef Hook</h1>
      <input ref={inputRef} type="text" placeholder='Enter user name'/>
      <button onClick={inputHandler}>Focus on Input Field</button>
    </div>
  )
}
export default App;