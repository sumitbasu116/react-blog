
function App(){

return (
  <div>
    <h1>React JS Get Input Field Value</h1>
    <input type="text" onChange={(event)=>alert(event.target.value)}/>
    <br />
    <br />
    <button >Clear Text</button>
  </div>
)
}

export default App;