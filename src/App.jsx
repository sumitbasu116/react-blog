
function App(){
  const userData=[
    {
      name:'Sumit',
      age:32,
      email:'sumit@test.com',
      id:1
    },
    {
      name:'Amit',
      age:42,
      email:'amit@test.com',
      id:2
    },
    {
      name:'Arit',
      age:22,
      email:'arit@test.com',
      id:3
    },
    {
      name:'Sunil',
      age:52,
      email:'sunil@test.com',
      id:4
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
        <tr>
          <td>{userData[0].id}</td>
          <td>{userData[0].name}</td>
          <td>{userData[0].email}</td>
          <td>{userData[0].age}</td>
        </tr>
        <tr>
          <td>{userData[1].id}</td>
          <td>{userData[1].name}</td>
          <td>{userData[1].email}</td>
          <td>{userData[1].age}</td>
        </tr>
        <tr>
          <td>{userData[2].id}</td>
          <td>{userData[2].name}</td>
          <td>{userData[2].email}</td>
          <td>{userData[2].age}</td>
        </tr>
      </tbody>
    </table>

  </div>
)
}

export default App;