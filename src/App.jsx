import { useState } from "react";

function App() {

  const [data,setData] =useState(
    [
      'Sam','Ram','Jadu','Madhu'
    ]
  );

  return (
    <div>
      <h1>Updating Array in State</h1>
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
    </div>
  )
}
export default App;