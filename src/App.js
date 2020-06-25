import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";
import { Loginhome } from "../src/pages/loginhome";
import { Mainhome } from "../src/pages/mainhome";

function App() {
  const [cookie, setcookie] = useState(false);
  const [login, setlogin] = useState(false);
  const [globalUser, setGlobalUser] = useState("");
  const [userID, setUserID] = useState("");
  const [userDate, setUserDate] = useState("");
  const [appclass, setappclass] = useState("");
  useEffect(() => {
    if (document.cookie.length > 0) {
      setcookie(true);
      setGlobalUser(Cookies.get("LOGIN"));
      setUserID(Cookies.get("id"));
      setUserDate(Cookies.get("created_dt"));
    }
  }, []);
  useEffect(() => {
    cookie ? setlogin(true) : setlogin(false);
    !login ? setappclass("main") : setappclass("App");
  }, [cookie, login]);
  if (login) {
    return (
      <div className={appclass}>
        <Loginhome
          login={login}
          setcookie={setcookie}
          globalUser={globalUser}
          userID={userID}
          userDate={userDate}
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
          setUserID={setUserID}
          setUserDate={setUserDate}
        />
      </div>
    );
  }
}

export default App;
