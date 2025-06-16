import './css/styling.css'
function App() {


  return (
    <>
      <h1 className='heading'>External Styling</h1>
      <div className='user-card'>
        <div>
          <img className='img-style' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        </div>
        <div className='text-wrap'>
          <h4>Software Developer</h4>
          <p>Sumit Basu</p>
        </div>
      </div>
    </>
  )
}
export default App;