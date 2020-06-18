import React, { useState, useEffect } from "react";
import "./App.css";
import { Loginhome } from "../src/pages/loginhome";

function App() {
  const [login, setlogin] = useState(true);
  // useEffect(() => {
  //   console.log("app s login efect =" + login);
  // }, [login]);

  return (
    <div className="App">
      {/* <button onClick={() => setlogin(false)}>
        in app change login to false
      </button>
      <button onClick={() => setlogin(true)}>
        in app change login to true
      </button> */}
      <Loginhome login={login} setlogin={setlogin} />
    </div>
  );
}

export default App;
