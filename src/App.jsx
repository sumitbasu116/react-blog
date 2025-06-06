import User from "./User";

function App(){
let userObj ={
  userName:"Sumit Basu",
  age :32,
  email : 'sumit@gmail.com'
};
return (
  <div>
    <h1>React JS Props</h1>
    < User user={userObj}/>
  </div>
)
}

export default App;