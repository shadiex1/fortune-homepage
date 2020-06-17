import React from 'react';
import './App.css';
import HomePage from "./Pages/3/Home/Home"

function App() {
  const orgName="fortune"
  return (
    <div className="App">
      <HomePage org={orgName}/>
    </div>
  );
}

export default App;
