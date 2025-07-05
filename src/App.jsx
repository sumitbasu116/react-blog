import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

function App() {
  const [subject,setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "green", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <h1>Context API</h1>
        <select  onChange={(event)=>setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
        </select>
        <College />
      </SubjectContext.Provider>
    </div>
  )
}
export default App;