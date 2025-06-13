import { useEffect } from "react";

function Counter({data}){

    function handleCounter(){
        console.log("handleCounter called");
        
    }
    useEffect(
        ()=>{
            handleCounter();
        },[data]
    )
    
    return (
        <div>
            <h3>Counter Value:{data}</h3>
        </div>
    );

}

export default Counter; 