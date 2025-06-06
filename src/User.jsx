
function User({user}){

    return(
        <div>
            <h2>User Component</h2>
            <h3>name: {user.name}</h3>
            <h3>age: {user.age}</h3>
            <h3>email: {user.email}</h3>
        </div>
    );
}

export default User;