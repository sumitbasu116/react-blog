import useToggle from "./useToggle";

function App() {
  
  const [flag,setFlag]=useToggle(true);

  return (
    <>
    <button onClick={setFlag}>Toggle Value</button>
    <button onClick={()=>setFlag(true)}>Show Value</button>
    <button onClick={()=>setFlag(false)}>Hide Value</button>
      
    {
      flag?<h1>Custom Hooks</h1>:null
    }
    </>
  )
}
export default App;