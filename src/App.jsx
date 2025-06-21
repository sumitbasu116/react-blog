
import { useFormStatus } from "react-dom";

function App() {

  const handleForm=async ()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("Submit");
  }
  
  const CustomerForm=()=>{
    const {pending}=useFormStatus(null);
    console.log(pending);
    
    return(
      <div>
        <input type="text" placeholder="Enter Your Name"/>
        <br />
        <br />
        <input type="text" placeholder="Enter Password"/>
        <br />
        <br />
        <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
      </div>
    )
  }

  return (
    <div>
      <form action={handleForm}>
        <CustomerForm/>
      </form>
    </div>
  )
}
export default App;