import useToggle from "./useToggle";

function App() {
  
  const [flag,toggleValue]=useToggle(true);

  return (
    <>
    <button onClick={toggleValue}>Toggle Value</button>
    <button>Show Value</button>
    <button>Hide Value</button>
      
    {
      flag?<h1>Custom Hooks</h1>:null
    }
    </>
  )
}
export default App;