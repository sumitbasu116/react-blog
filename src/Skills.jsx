import { useState } from "react";
function Skills(){
const[skills,setSkills] = useState(['']);

function handleSkills(event){
    console.log(event.target.value,event.target.checked);
    setSkills(event.target.value);
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