import { useId } from "react";

function App() {

  return (
    <div>
      <h1>useId Hook</h1>
      <UserForm/>
      <hr />
      <UserForm/>
    </div>
  )
}
export default App;


function UserForm() {

  const name = useId();
  const age = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={name}>Enter Name:</label>
        <input type="text" placeholder="enter your name" id={name}/>
        <br /><br />
        <label htmlFor={age}>Enter Age:</label>
        <input type="number" placeholder="enter your age" id={age}/>
      </form>
    </div>
  )
}