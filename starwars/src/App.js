import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      setCharData(response.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  console.log(charData);
  


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Character charAttrs={charData} />
    </div>
  );
}

export default App;
