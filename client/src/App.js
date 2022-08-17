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
    });
  };

  // Loads the data
  useEffect(() => {
    loadData();
  },[]);

  return (
    <div className='container'>

      <h1>React Accordion</h1>
      {/* Loads the data unto the h2 */}
      <h2>{JSON.stringify(showtData)}</h2>

    </div>
  )
}

export default App