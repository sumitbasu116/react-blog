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

  const user = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={user+"name"}>Enter Name:</label>
        <input type="text" placeholder="enter your name" id={user+"name"}/>
        <br /><br />
        <label htmlFor={user+"age"}>Enter Age:</label>
        <input type="number" placeholder="enter your age" id={user+"age"}/>
      </form>
    </div>
  )
}