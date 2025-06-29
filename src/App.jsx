import { useState } from "react";

function App() {

  const [data,setData] =useState(
    [
      'Sam','Ram','Jadu','Madhu'
    ]
  );
  const [dataDetail,setDataDetails]=useState(
    [
      {Name:'Sam',Age:29},
      {Name:'Ram',Age:23},
      {Name:'Jadu',Age:24},
      {Name:'Madhu',Age:22}
    ]
  );
  function handleLastNameUpdate(name){
    data[data.length-1] = name;
    setData([...data]);
  }
  function handleLastElementAgeUpdate(value){
    let tempData=dataDetail[data.length-1];
    tempData.Age=value;
    dataDetail[data.length-1]=tempData;
    setDataDetails([...dataDetail]);
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
      <hr />
      <input type="number" placeholder="Update Last Element Age" onChange={(e)=>handleLastElementAgeUpdate(e.target.value)}/>
      {
        dataDetail.map(
          (item,index)=>(
            <h3 key={index}>{item.Name},{item.Age}</h3>
          )
        )
      }
    </div>
  )
}
export default App;