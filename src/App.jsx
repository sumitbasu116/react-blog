
import { useState } from "react";
import DigitalClock from "./DigitalClock";
function App() {  

  const[color,setColor] = useState('green');

  return (
    <div>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
      <DigitalClock color={color}/>
      
    </div>
  )
}
export default App;