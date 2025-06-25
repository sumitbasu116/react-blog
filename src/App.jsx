import { useState } from "react";

function App() {

const [users,serUsers]=useState([]);
const [user,setUser]=useState('');
const handleAddUsers=()=>{
  serUsers([...users,user]);
}

const totalUsers=users.length;
const last = users[users.length-1];

  return (
    <div>
      <h2>Total User:{totalUsers}</h2>
      <h2>Last User:{last}</h2>
      <h2>Total Unique User:{}</h2>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add New User"/>
      <button onClick={handleAddUsers}>Add User</button>
      {
        users.map(
          (item,index)=>(
            <h4 key={index}>{item}</h4>
          )
        )
      }
    </div>
  )
}
export default App;