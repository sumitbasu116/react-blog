import { useState } from "react";

function App() {

  const[data,setData] = useState(
    {
      name: 'Sumit',
      address:{
        city: 'Kolkata',
        country: 'India'
      }
    }
  )

  const divStyle = {
    border: '2px solid green',
    width: 'fit-content',
    padding: '2px',
    margin: '2px',
    borderRadius: '5px'
  }

  return (
    <div>
      <h1>Updating Objects in State</h1>

      <input type="text" placeholder="Update Name"/>
      <div style={divStyle}>
        <p>Name: {data.name}</p>
        <p>Name: {data.address.city}</p>
        <p>Name: {data.address.country}</p>
      </div>
    </div>
  )
}
export default App;