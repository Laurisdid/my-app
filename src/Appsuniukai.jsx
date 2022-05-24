
import React from 'react';
import ReactDOM from 'react-dom/client';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function Dog(props) {
    return <li>I am a { props.name }</li>;
  }
  

function App() {
    const myList = dogs.map((item) => <p>{item}</p>)
    return (
        <>
          <h1>Who lives in my garage?</h1>
          <ul>
            {dogs.map((dog) => <Dog name={dog} />)}
          </ul>
        </>
      );
  }
   
  

  const myList = dogs.map((item) => <p>{item}</p>)

  
    
  export default App;