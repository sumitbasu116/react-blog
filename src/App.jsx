
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
      <table border='1'>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>AGE</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map(
              (user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default App;