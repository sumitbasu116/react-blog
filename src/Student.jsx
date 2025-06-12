
function Student({data}){
    return(
        <div style={{
            backgroundColor:'#ffff',
            margin:'10px',
            padding:'5px',
            borderRadius:'10px',
            border:'2px solid green'
        }}>
            <h5>{data.name}</h5>
            <h5>{data.age}</h5>
            <h5>{data.email}</h5>
        </div>
    );
}

export default Student;