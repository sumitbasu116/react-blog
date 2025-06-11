import { useState } from "react";
function Skills(){
const[skills,setSkills] = useState([]);

function handleSkills(event){
    console.log(event.target.value,event.target.checked);
    if(event.target.checked){
        setSkills([...skills,event.target.value]);
    } else{
        setSkills([...skills.filter((item)=>item!=event.target.value)]);
    }
}
    return(
        <div>
            <h3>Select your Skills</h3>
            <input type="checkbox" onChange={handleSkills} id='php' value='PHP'/>
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id='js' value='JS'/>
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id='node' value='Node'/>
            <label htmlFor="node">NODE</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id='java' value='JAVA'/>
            <label htmlFor="java">JAVA</label>

        <h2>{skills.toString()}</h2>
        </div>
    )
}
export default Skills;