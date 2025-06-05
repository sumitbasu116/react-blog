
function App(){

function clickMeMore(msg){
  alert(msg+"Enjoy in Life!");
}
function clickMe(){
  alert("Fun in Life!");
}
const fruit = (name) => {
  alert(name);
}

return (
  <div>
    <h1>Event and Function name</h1>
    <button onClick={clickMe}>click for Fun</button>
    <br />
    <button onClick={()=>clickMeMore('Hello,')}>click more</button>
    <br />
    <button onClick={()=>fruit('Apple')}>Apple</button>
    <button onClick={()=>fruit('Banana')}>Banana</button>
  </div>
)
}

export default App;