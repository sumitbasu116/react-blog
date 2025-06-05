import Header from "./Header"
function App(){
return (
  <div>
    <Header/>
    <h1>Hello React</h1>
    <h1>Kill the Code</h1>
    <Fruit/>
  </div>
)
}
function Fruit(){
  return (
  <div>
    <h1>Apple</h1>
  </div>
)
}
export default App;