import { useState } from "react";
import Skills from "./Skills";
function App(){
  const[gender,setGender] = useState('male');
  const[city,setCity] = useState('delhi');
return (
  <div>
    <h1>Handle Radio Button and Dropdown</h1>
    <h4>Select Gender:</h4> 
    <input type="radio" name='gender' onChange={(event)=>{setGender(event.target.value)}} id='male' value={'male'} 
    checked={gender=='male'}/>
    <label htmlFor="male">Male</label>
    <input type="radio" name='gender' onChange={(event)=>{setGender(event.target.value)}} id='female' value={'female'}
    checked={gender=='female'}/>
    <label htmlFor="female">Female</label>
    <h3>Selected Gender:{gender}</h3>
    <h4>Select City:</h4>
    <select onChange={(event)=>setCity(event.target.value)}>
      <option value="delhi">Delhi</option>
      <option value="kolkata">Kolkata</option>
      <option value="mumbai">Mumbai</option>
    </select>
     <h3>Selected City:{city}</h3>
  </div>
)
}

export default App;