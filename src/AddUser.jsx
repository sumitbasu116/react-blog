

function AddUser({addUser}){
    
    return(
        <div>
            <h3>Add User</h3>
            <input type="text" onChange={(event)=>addUser(event.target.value)} placeholder="Enter Your Name"/>
        </div>
    )
}

export default AddUser