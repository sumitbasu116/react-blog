import Header from "./Header"
import Login,{Profile,Setting,User_key} from "./UserComponent";
function App(){
return (
  <div>
    <Header/>
    <h1>Hello React</h1>
    <h1>Kill the Code</h1>
    <Login/>
    <Profile/>
    <Setting/>
    <h3>{User_key}</h3>
  </div>
)
}

export default App;