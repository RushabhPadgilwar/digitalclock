import React, { useState } from "react";
import "./App.css";

const App = () => {
  
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);
  return(
    <div id="main">
          <h1 id="heading">Digital Clock</h1>
          <h2 id="time"> {ctime} </h2>
          {/* <button onClick={UpdateTime}> Get Time</button> */}
    </div>
  );
};

export default App;
