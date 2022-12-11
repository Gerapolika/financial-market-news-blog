import './App.css';
import React, { useEffect } from 'react';
import { newsList } from './firebase';

function App() {

  useEffect(() => {
    newsList
    .then(result => console.log(result))
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
