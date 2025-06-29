import { useState } from "react";

function App() {

  const [data,setData] =useState(
    [
      'Sam','Ram','Jadu','Madhu'
    ]
  );
  function handleLastNameUpdate(name){
    data[data.length-1] = name;
    setData([...data]);
  }
  return (
    <div>
      <h1>Updating Array in State</h1>
      <input type="text" placeholder="Update Last Name" onChange={(e)=>handleLastNameUpdate(e.target.value)}/>
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
    </div>
  )
}
export default App;