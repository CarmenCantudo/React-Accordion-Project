import React, {useState, useEffect} from 'react'

const App = () => {

  const url = "https://jsonplaceholder.typicode.com/posts";

  const [showtData, setShowData] = useState([]);

  // Define an error function
  const loadData = () =>{
    // get data from API
    fetch(url, {
      method: "GET"
    }).then(res => res.json())  // Convert data to json
    .then(result =>{
      if(result){
        setShowData(result);
      }
    }).catch(err =>{
      console.log(err)
    })
  }

  return (
    <div className='container'>

      <h1>React Accordion</h1>

    </div>
  )
}

export default App