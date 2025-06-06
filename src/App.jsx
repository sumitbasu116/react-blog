import User from "./User";
import Student from "./Student";
import { useState } from "react";
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
const [student,setStudent] = useState();
return (
  <div>
    <h1>React JS Props</h1>
    {student && <Student name={student}/>}
    <button onClick={()=>setStudent('Bhaskar')}>Add Student</button>
    < User user={userObj1}/>
    < User user={userObj2}/>
    < User user={userObj3}/>
  </div>
)
}

export default App;