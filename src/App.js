import React from "react";
import { useState } from 'react';
import './App.css';

const App = () => {
  let time=new Date().toLocaleTimeString();

  const [ttime, setTtime] = useState(time);

  const UpdateHandler = () => {
    time = new Date().toLocaleTimeString();
    setTtime(time);
  };
  setInterval(UpdateHandler);

  return(
    <div className="digitalclk">
    <h1> {ttime} </h1>
    </div>
  );
}

export default App;