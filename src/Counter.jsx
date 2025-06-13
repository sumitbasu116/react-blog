
function Counter({data}){

    function handleCounter(){
        console.log("handleCounter called");
        
    }
    handleCounter();
    return (
        <div>
            <h3>Counter Value:{data}</h3>
        </div>
    );

}

export default Counter; 