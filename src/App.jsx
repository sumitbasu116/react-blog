import Header from "./Header"
import Login,{Profile,Setting} from "./UserComponent";
function App(){
return (
  <div>
    <Header/>
    <h1>Hello React</h1>
    <h1>Kill the Code</h1>
    <Login/>
    <Profile/>
    <Setting/>
  </div>
)
}

export default App;