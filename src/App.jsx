import College from "./College";
function App() {
  const collegeData = [
    {
      name: 'SIT',
      website: 'www.sit.com',
      city: 'Tumkur',
      student: [
        {
          name: 'Sumit',
          age: 21,
          email: 'sumit@abc.com'
        },
        {
          name: 'Anil',
          age: 22,
          email: 'anil@abc.com'
        },
        {
          name: 'Sakhshi',
          age: 20,
          email: 'sakhshi@abc.com'
        }
      ]
    },
    {
      name: 'KIT',
      website: 'www.kit.com',
      city: 'Gubbi',
      student: [
        {
          name: 'Sumit',
          age: 21,
          email: 'sumit@abc.com'
        },
        {
          name: 'Anil',
          age: 22,
          email: 'anil@abc.com'
        },
        {
          name: 'Sakhshi',
          age: 20,
          email: 'sakhshi@abc.com'
        }
      ]
    },
    {
      name: 'IIIT',
      website: 'www.iiit.com',
      city: 'Bengalore',
      student: [
        {
          name: 'Sumit',
          age: 21,
          email: 'sumit@abc.com'
        },
        {
          name: 'Anil',
          age: 22,
          email: 'anil@abc.com'
        },
        {
          name: 'Sakhshi',
          age: 20,
          email: 'sakhshi@abc.com'
        }
      ]
    }
  ]
  return (
    <div>
      <College college={collegeData}/>
    </div>
  )
}
export default App;