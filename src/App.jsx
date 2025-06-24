import { useTransition } from "react";



function App() {

  const [pending,startTransition] = useTransition();


  const handleButton=async ()=>{
    startTransition(
     async ()=>{
          //big logic execution which takes 2sec
          await new Promise(res=>setTimeout(res,2000))
      }
    )
  }

  return (
    <div>
      <h1>useTransition Hook</h1>
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}
export default App;