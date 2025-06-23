import { useState } from "react";


function App() {

  const [pending,setPending] = useState(false);

  const handleButton=async ()=>{
    setPending(true);
    //big logic execution which takes 2sec
    await new Promise(res=>setTimeout(res,2000))
    setPending(false);
  }

  return (
    <div>
      <h1>useTransition Hook</h1>
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}
export default App;