import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color='red';
    inputRef.current.placeholder='Enter Password';
    inputRef.current.value=123;
  }

  const toggleHandler=()=>{
    if(inputRef.current.style.display!='none'){
      inputRef.current.style.display='none';
    }else{
      inputRef.current.style.display='inline';
    }
  }

  return (
    <div>
      <h1>useRef Hook</h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref={inputRef} type="text" placeholder='Enter user name'/>
      <button onClick={inputHandler}>Focus on Input Field</button>
    </div>
  )
}
export default App;