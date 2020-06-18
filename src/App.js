import React, { useState, useEffect } from "react";
import "./App.css";
import { Loginhome } from "../src/pages/loginhome";
import { Mainhome } from "../src/pages/mainhome";

function App() {
  const [login, setlogin] = useState(false);
  const [appclass, setappclass] = useState("");
  useEffect(() => {
    !login ? setappclass("main") : setappclass("App");
    console.log("app s login efect =" + login);
  }, [login]);
  if (login) {
    return (
      <div className={appclass}>
        <button onClick={() => setlogin(false)}>
          in app change login to false
        </button>
        <button onClick={() => setlogin(true)}>
          in app change login to true
        </button>
        <Loginhome login={login} setlogin={setlogin} />
      </div>
    );
  } else {
    return (
      <div className={appclass}>
        <button onClick={() => setlogin(false)}>
          in app change login to false
        </button>
        <button onClick={() => setlogin(true)}>
          in app change login to true
        </button>
        <Mainhome login={login} />
      </div>
    );
  }
}

export default App;
