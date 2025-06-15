import { useState } from "react";
function App() {

  const [cardstyle, setCardstyle] = useState(
    {
      border: '1px solid #483131',
      borderRadius: '10px',
      width: '300px',
      margin: '2px', boxShadow: '2px 5px 5px #766d6d',
      paddingLeft: '50px'
    }
  )

  const updateTheme = (bgColor, textColor) => {
    setCardstyle(
      {
        ...cardstyle, backgroundColor: bgColor
      }
    ),
    setTextColor(textColor)
  }

  const [textColor, setTextColor] = useState('black');


  return (
    <>
      <button onClick={() => updateTheme('cadetblue', '#3F51B5')}>Custom</button>
      <button onClick={() => updateTheme('white', 'black')}>Default</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        <div style={cardstyle}>
          <h2>Dynamic and Conditional Inline Style</h2>
          <img style={{
            width: '100px',
            borderRadius: '10px',
            margin: '5px'
          }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px',color:textColor}}>
            <h4>Software Developer</h4>
            <p>Sumit Basu</p>
          </div>
        </div>
        <div style={cardstyle}>
          <h2>Inline Style in React</h2>
          <img style={{
            width: '100px',
            borderRadius: '10px',
            margin: '5px'
          }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px',color:textColor}}>
            <h4>Software Developer</h4>
            <p>Sumit Basu</p>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default App;