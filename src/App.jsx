import { useState } from "react";


function App() {

  const [pending,setPending] = useState(null);

  const handleButton=()=>{
    setPending(true);
    //big logic execution which takes 2sec

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