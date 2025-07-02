import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Data/>
      <hr />
      <Data/>
    </Fragment>
  )
}
export default App;


function Data() {
  return (
    <Fragment>
      <h1>using fragment</h1>
      <h1>using fragment</h1>
    </Fragment>
  )
}