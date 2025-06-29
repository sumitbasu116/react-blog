import { useActionState } from "react";
function App() {

   async function handleFormSubmit(previousData,formData){
    
    let name =formData.get('name');
    let password = formData.get('password');

    await new Promise(res=>setTimeout(res,2000));

    if(name && password){
      return {message: 'Data Submitted'}
    } else{
      return {error: 'Error in Data input'}
    }
    
  }
  const [data,action,pending] = useActionState(handleFormSubmit,undefined);

  return (
    <div>
      <h1>useActionState Hook</h1>
      <form action={action}>
        <input type="text" placeholder="Enter Your Name" name="name"/>
        <br />
        <input type="password" placeholder="Enter Your Password" name="password"/>
        <br /><br />
        <button disabled={pending}>Submit Data</button>
        <br />
        {
          data?.error && <span style={{color:'red'}}>{data.error}</span>
        }
        {
          data?.message && <span style={{color:'green'}}>{data.message}</span>
        }
      </form>
    </div>
  )
}
export default App;