import {Button} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
function App() {

  return (
    <div>
      <h2>Add Bootstrap with React js</h2>
      <Button>Ok</Button>
      <Button variant='danger'>Ok</Button>
      <Button variant='success'>Ok</Button>
      <Button variant="outline-success">Success</Button>
      <br />
      <br />
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
export default App;