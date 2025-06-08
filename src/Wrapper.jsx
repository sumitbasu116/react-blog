
function Wrapper({children,color='green'}){
    return(
        <div style={{color:color,border:'4px solid green',width:'300px',margin:'10px'}}>
            {children}
        </div>
    );
}

export default Wrapper;