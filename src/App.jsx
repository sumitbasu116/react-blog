import { useActionState } from "react";
function App() {

  async function handleFormSubmit(previousData, formData) {

    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise(res => setTimeout(res, 2000));

    if (name && password) {
      return { message: 'Data Submitted',name,password }
    } else {
      return { error: 'Error in Data input' }
    }

  }
  const [data, action, pending] = useActionState(handleFormSubmit, undefined);

  return (
    <div>
      <h1>useActionState Hook</h1>
      <form action={action}>
        <input type="text" defaultValue={data?.name} placeholder="Enter Your Name" name="name" />
        <br />
        <input type="password" defaultValue={data?.password} placeholder="Enter Your Password" name="password" />
        <br /><br />
        <button disabled={pending}>Submit Data</button>
        <br />
      </form>
      {
        data?.error && <span style={{ color: 'red' }}>{data.error}</span>
      }
      {
        data?.message && <span style={{ color: 'green' }}>{data.message}</span>
      }
      {
        data?.name && <h4>Name: {data?.name}</h4>
      }
      {
        data?.password && <h4>Password: {data?.password}</h4>
      }
    </div>
  )
}
export default App;