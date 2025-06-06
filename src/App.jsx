import User from "./User";

function App(){
let userName="Sumit Basu";
let age =32;
return (
  <div>
    <h1>React JS Props</h1>
    < User name={userName} age={age}/>
  </div>
)
}

export default App;