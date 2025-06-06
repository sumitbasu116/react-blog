import User from "./User";

function App(){
let college=['NIT','BUT','WBUT','IIT','MIT'];
let userObj1 ={
  name:"Sumit Basu",
  age :32,
  email : 'sumit@gmail.com',
  college: college[0]
};
let userObj2 ={
  name:"Amit Basu",
  age :32,
  email : 'amit@gmail.com',
  college: college[1]
};
let userObj3 ={
  name:"Anil Basu",
  age :32,
  email : 'anil@gmail.com',
  college: college[2]
};

return (
  <div>
    <h1>React JS Props</h1>
    < User user={userObj1}/>
    < User user={userObj2}/>
    < User user={userObj3}/>
  </div>
)
}

export default App;