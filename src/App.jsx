

function App() {

  const handleForm=(event)=>{
    event.preventDefault();
    let user=document.querySelector('#user').value;
    console.log(user);
    let password=document.querySelector('#password').value;
    console.log(password);
  }
  
  return (
    <div>
      <h1>uncontrolled component</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter your name"/>
        <br />
        <br />
        <input type="text" id="password" placeholder="Enter password"/>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App;