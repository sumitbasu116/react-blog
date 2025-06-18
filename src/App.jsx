
import User from "./User";
function App() {
  
  const displayName=(name)=>{
    alert(name);
  }

  const getName=(name)=>{
    alert(name);
  }

  return (
    <div>
      <h1>Pass Function in Component as Props</h1>
      <User displayName={displayName} name='Sumit' getName={getName}/>
      <User displayName={displayName} name='Samhita' getName={getName}/>
      <User displayName={displayName} name='Rai' getName={getName}/>
      <User displayName={displayName} name='Amit' getName={getName}/>
    </div>
    
  )
}
export default App;