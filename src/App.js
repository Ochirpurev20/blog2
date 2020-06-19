import React, { useState, useEffect } from "react";
import "./App.css";
import { Loginhome } from "../src/pages/loginhome";
import { Mainhome } from "../src/pages/mainhome";

function App() {
  const [cookie, setcookie] = useState(true);
  const [login, setlogin] = useState(false);
  const [globalUser, setGlobalUser] = useState("");
  const [appclass, setappclass] = useState("");
  useEffect(() => {
    cookie ? setlogin(true) : setlogin(false);
    !login ? setappclass("main") : setappclass("App");
    console.log("app s login efect =" + login);
    console.log("app s efect cookie =" + cookie);
    console.log("app s efect globalUser =" + globalUser);
  }, [cookie, login]);
  if (login) {
    return (
      <div className={appclass}>
        <Loginhome
          login={login}
          setcookie={setcookie}
          globalUser={globalUser}
        />
      </div>
    );
  } else {
    return (
      <div className={appclass}>
        <Mainhome
          login={login}
          setcookie={setcookie}
          setGlobalUser={setGlobalUser}
        />
      </div>
    );
  }
}

export default App;
