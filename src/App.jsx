
function App() {

  const handleForm=()=>{
    console.log("Hello");
    
  }
  
  return (
    <div>
      <form action={handleForm}>
        <input type="text" placeholder="Enter Your Name"/>
        <input type="text" placeholder="Enter Password"/>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App;