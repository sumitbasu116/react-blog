import { useEffect } from "react";

function Counter({data,counter}){

    function handleMounting(){
        console.log("Mounting...");
    }
    function handleCounting(){
        console.log("Updating...");
    }
    useEffect(
        ()=>{
            handleMounting();
        },[]
    );
    useEffect(
        ()=>{
            handleCounting();
        },[counter]
    )
    
    return (
        <div>
            <h3>Counter Value:{counter}</h3>
            <h3>Data Value:{data}</h3>
        </div>
    );

}

export default Counter; 