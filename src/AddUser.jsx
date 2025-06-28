import { useState } from "react"

function AddUser(){
    const [user,setUser] = useState('');
    return(
        <div>
            <h3>Add User {user}</h3>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter Your Name"/>
        </div>
    )
}

export default AddUser