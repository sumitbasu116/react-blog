import styled from "styled-components";
function App() {

  const Heading=styled.h2(
    {
      color:'red',
      border:'1px solid green',
      borderRadius:'5px',
      margin:'20px',
      padding:'10px'
    }
  )
  const ButtonSt=styled.button`
  color:red;
  width:100px;
  height:30px;
  margin: 20px
  `

  return (
    <div>
      <h1>Styled components</h1>
      <Heading>Hello Style Component 1</Heading>
      <Heading>Hello Style Component 2</Heading>
      <Heading>Hello Style Component 3</Heading>
      <Heading>Hello Style Component 4</Heading>
      <Heading>Hello Style Component 5</Heading>
      <Heading>Hello Style Component 6</Heading>
      <ButtonSt>Login</ButtonSt>
      <ButtonSt>Register</ButtonSt>
      <ButtonSt>Back</ButtonSt>
    </div>
  )
}
export default App;