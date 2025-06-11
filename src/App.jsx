import { useState } from "react";
function App(){
  const[name,setName] = useState('');
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');
return (
  <div>
    <h1>Controlled Component</h1>
    <form action="" method="get">
      <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Name"/>
      <br />
      <br />
      <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Enter Password"/>
      <br />
      <br />
      <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter email"/>
      <br />
      <br />
      <button>Submit</button>
      <br />
      <br />
      <button onClick={()=>{setEmail('');setName('');setPassword('')}}>Clear</button>
    </form>
  <h2>{name}</h2>
  <h2>{password}</h2>
  <h2>{email}</h2>
  </div>
)
}

export default App;