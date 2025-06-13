import { useEffect, useState } from "react";

function DigitalClock({color}){

    const[time,setTime] = useState(0);

    useEffect(
        ()=>{
            setInterval(
                ()=>{
                    setTime(new Date().toLocaleTimeString());
                },1000
            )
        },[])

    return(
        <div style={{color:color,
            backgroundColor:'#ccc',
            width:'200px',
            borderRadius:'20px',
            padding:'10px'
        }}>
            <h1>{time}</h1>
        </div>
    )
}
export default DigitalClock;