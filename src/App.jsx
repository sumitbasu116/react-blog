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

  function handleNameUpdate(val){
    data.name=val;
    setData({...data});
  }
 function handleCityUpdate(city){
    let tempAddress=data.address;
    tempAddress.city=city;
    console.log(data);
    setData({...data,address:{...tempAddress}});
  }

  return (
    <div>
      <h1>Updating Objects in State</h1>

      <input type="text" placeholder="Update Name" onChange={(event)=>handleNameUpdate(event.target.value)}/>
      <br />
      <input type="text" placeholder="Update City" onChange={(event)=>handleCityUpdate(event.target.value)}/>
      <div style={divStyle}>
        <p>Name: {data.name}</p>
        <p>Name: {data.address.city}</p>
        <p>Name: {data.address.country}</p>
      </div>
    </div>
  )
}
export default App;