import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  const name = useContext(SubjectContext);
    return (
    
    <div style={{backgroundColor:"#fff15c",padding:10}}>
      <h1>Subject is:{name}</h1>
    </div>
  )
}

export default Subject;