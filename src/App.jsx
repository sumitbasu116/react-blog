import User from "./User";

function App() {
  const userData = [
    {
      name: 'Sumit',
      age: 32,
      email: 'sumit@test.com',
      id: 1
    },
    {
      name: 'Amit',
      age: 42,
      email: 'amit@test.com',
      id: 2
    },
    {
      name: 'Arit',
      age: 22,
      email: 'arit@test.com',
      id: 3
    },
    {
      name: 'Sunil',
      age: 52,
      email: 'sunil@test.com',
      id: 4
    }
  ];
  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      {
        userData.map(
          (user)=>(
            <div key={user.id}>
            <User user={user}/>
            </div>
          )
        )
      }
    </div>
  )
}

export default App;