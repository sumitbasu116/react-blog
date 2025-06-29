import { useActionState } from "react";
function App() {

   async function handleFormSubmit(previousData,formData){
    
    let name =formData.get('name');
    let password = formData.get('password');

    await new Promise(res=>setTimeout(res,2000));

    console.log(name,password);
    
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
        <button>Submit Data</button>
      </form>
    </div>
  )
}
export default App;