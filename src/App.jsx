
function App() {

  const handleForm=()=>{
    console.log("Hello");
    new Promise(res=>setTimeout(res,2000))
  }
  
  return (
    <div>
      <form action={handleForm}>
        <input type="text" placeholder="Enter Your Name"/>
        <br />
        <br />
        <input type="text" placeholder="Enter Password"/>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App;