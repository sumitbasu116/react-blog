import College from "./College";
function User({user}){

    return(
        <div>
            <hr />
            <h2>User Component</h2>
            <h3>name: {user.name}</h3>
            <h3>age: {user.age}</h3>
            <h3>email: {user.email}</h3>
            <College name={user.college}/>
        </div>
    );
}

export default User;