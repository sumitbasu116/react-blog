function User({displayName,name,getName}){

    return(
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>getName(name)}>Get Name</button>
        </div>
    )
}
export default User;