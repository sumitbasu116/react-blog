
function Wrapper({children}){
    return(
        <div style={{color:'green',border:'4px solid green',width:'300px',margin:'10px'}}>
            {children}
        </div>
    );
}

export default Wrapper;