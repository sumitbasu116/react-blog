
import { useRef } from "react";
function App() {

  const handleForm=(event)=>{
    event.preventDefault();
    let user=document.querySelector('#user').value;
    console.log(user);
    let password=document.querySelector('#password').value;
    console.log(password);
  }
  const userRef = useRef();
  const passwordRef = useRef();
  
  const handleFormRef=(event)=>{
    event.preventDefault();
    let user = userRef.current.value;
    console.log(user);
    let password=passwordRef.current.value;
    console.log(password);
  }
  
  return (
    <div>
      <h1>uncontrolled component</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter your name"/>
        <br />
        <br />
        <input type="text" id="password" placeholder="Enter password"/>
        <br />
        <br />
        <button>Submit</button>
      </form>
<hr />
      <form action="" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id="userRef" placeholder="Enter your name"/>
        <br />
        <br />
        <input type="text" ref={passwordRef} id="passwordRef" placeholder="Enter password"/>
        <br />
        <br />
        <button>Submit with Ref</button>
      </form>
    </div>
    
  )
}
export default App;