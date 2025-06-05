
function clickMe(){
    alert("I am clicked");
}

function ToDo(){

    return(
        <div>
            <img src="https://st5.depositphotos.com/1703608/69112/i/450/depositphotos_691120514-stock-photo-adorable-labrador-puppy-closeup-isolated.jpg"
        alt="dog" className="photo"/>

        <ul>
            <li>Invent new Traffic lights</li>
            <li>Invent new Traffic lights</li>
            <li>Invent new Traffic lights</li>
        </ul>
        ,<button onClick={clickMe}>click me</button>
        </div>
    )
}

export default ToDo;