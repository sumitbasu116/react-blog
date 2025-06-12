function User({user}){
    return(
        <div style={{
                border: "1px solid",
                borderColor: "green",
                padding: "10px",
                width : "200px",
                margin : "10px",
                borderRadius : "10px"
        }}>
            <h4>Name: <span style={{color:'green'}}>{user.name}</span></h4>
            <h4>Email:<span style={{color:'green'}}>{user.email}</span></h4>
            <h4>Age:<span style={{color:'green'}}>{user.age}</span></h4>
        </div>
    );
}

export default User;