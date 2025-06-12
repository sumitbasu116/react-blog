import Student from "./Student";

function College({college}){
    return(
        <div>
            {
                college.map(
                    (item,index)=>(
                        <div key={index} style={
                            {
                                backgroundColor:'#ccc',
                                padding:'20px',
                                marginBottom:'10px',
                                border:'#000 solid',
                                borderRadius:'10px',
                                width:'500px'
                            }
                        }>
                        <h2>College Name:{item.name}</h2>
                        <ul>
                            <li><h3>Website:{item.website}</h3></li>
                            <li><h3>City:{item.city}</h3></li>
                            <li>
                                <h3>Student Name:</h3>
                                {
                                    item.student.map(
                                        (ele)=>(
                                           <Student data={ele}/> 
                                        )
                                    )
                                }
                            </li>
                        </ul>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default College;