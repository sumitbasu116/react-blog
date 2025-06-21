
function App() {

  const handleForm=async ()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("Submit");
  }
  
  const CustomerForm=()=>{
    return(
      <div>
        <input type="text" placeholder="Enter Your Name"/>
        <br />
        <br />
        <input type="text" placeholder="Enter Password"/>
        <br />
        <br />
      </div>
    )
  }

  return (
    <div>
      <form action={handleForm}>
        <CustomerForm/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App;