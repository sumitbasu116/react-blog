
import User from "./User";
function App() {
  
  const displayName=(name)=>{
    alert(name);
  }

  return (
    <div>
      <h1>Pass Function in Component as Props</h1>
      <User displayName={displayName} name='Sumit'/>
      <User displayName={displayName} name='Samhita'/>
      <User displayName={displayName} name='Rai'/>
      <User displayName={displayName} name='Amit'/>
    </div>
    
  )
}
export default App;