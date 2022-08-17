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
      
      <div className='row'>

        {showtData.map((item,index) => (
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
            {/* Get title and description from API */}
            <h5>{item.title}</h5>
            <p>{item.des}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default App