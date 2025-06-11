import { useState } from "react";
function Skills(){
const[skills,setSkills] = useState(['']);

function handleSkills(event){
    console.log(event.target.value);

}
    return(
        <div>
            <h3>Select your Skills</h3>
            <input type="checkbox" onChange={(event)=>{handleSkills(event)}} id='php' value='PHP'/>
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" onChange={(event)=>{handleSkills(event)}} id='js' value='JS'/>
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" onChange={(event)=>{handleSkills(event)}} id='node' value='Node'/>
            <label htmlFor="node">NODE</label>
            <br />
            <br />
            <input type="checkbox" onChange={(event)=>{handleSkills(event)}} id='java' value='JAVA'/>
            <label htmlFor="java">JAVA</label>

        <h2>{skills.toString()}</h2>
        </div>
    )
}
export default Skills;