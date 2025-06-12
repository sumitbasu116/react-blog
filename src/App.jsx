import { useState } from "react";
import Skills from "./Skills";
function App(){
  const[gender,setGender] = useState('male');
return (
  <div>
    <h1>Handle Radio Button and Dropdown</h1>
    <h4>Select Gender:</h4> 
    <input type="radio" name='gender' onChange={(event)=>{setGender(event.target.value)}} id='male' />
    <label htmlFor="male">Male</label>
    <input type="radio" name='gender' onChange={(event)=>{setGender(event.target.value)}} id='female'/>
    <label htmlFor="female">Female</label>
    <h3>Selected Gender:{gender}</h3>
  </div>
)
}

export default App;