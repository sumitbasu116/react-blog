
function App(){
  const name = "Sumit Basu";
  const unk = "";
  const userObj = {
    'name':'Sumit',
    'email':'abc@gmail.com',
    'age': 29
  };
  let petName='Bruno';
  const userArr = ['Samhita','Rai'];

  const path ='https://st5.depositphotos.com/1703608/69112/i/450/depositphotos_691120514-stock-photo-adorable-labrador-puppy-closeup-isolated.jpg';

  function fruit(){
    return "Apple";
  }

  function sum(a,b){
    return a + b;
  }

  function operation(a,b,op){
    if(op == '+'){
      return a + b;
    }
    if(op == '-'){
      return a - b;
    } else{
      return a * b;
    }
  }

return (
  <div>
    <h1>Hello {name}</h1>
    <h1>{fruit()}</h1>
    <h2>{sum(10,20)}</h2>
    <h2>{operation(10,20,'-')}</h2>
    <h2>{unk ? unk : "User not found!!"}</h2>
    <h1>Age is {userObj.age}</h1>
    <h1>My wife and daughter {userArr[0]} and {userArr[1]}</h1>
    <input type="text" value={petName}/>
    <br />
    <img src={path} alt={unk} />
  </div>
)
}

export default App;