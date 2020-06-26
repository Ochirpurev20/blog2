import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./App.css";
import { Loginhome } from "../src/pages/loginhome";
import Mainhome from "../src/pages/mainhome";
import { connect } from "react-redux";

function App(props) {
  const [cookie, setcookie] = useState(false);
  const [applogin, setlogin] = useState(false);
  const [globalUser, setGlobalUser] = useState("");
  const [userID, setUserID] = useState("");
  const [userDate, setUserDate] = useState("");
  const [appclass, setappclass] = useState("");
  useEffect(() => {
    if (document.cookie.length > 0) {
      props.getTrue();
      props.getUserName(Cookies.get("LOGIN"));
      props.getUserId(Cookies.get("id"));
      props.getUserDate(Cookies.get("created_dt"));
    }
  }, []);
  useEffect(() => {
    if (props.appscookie) {
      setlogin(true);
      props.getUserName(Cookies.get("LOGIN"));
      props.getUserId(Cookies.get("id"));
      props.getUserDate(Cookies.get("created_dt"));
      setappclass("App");
    } else {
      setlogin(false);
      setappclass("main");
    }
  }, [props.appscookie]);

  if (applogin) {
    return (
      <div className={appclass}>
        <Loginhome
          login={applogin}
          setcookie={props.appscookie}
          globalUser={props.rdxUser}
          userID={props.rdxUserID}
          userDate={props.rdxUserDate}
        />
      </div>
    );
  } else {
    return (
      <div className={appclass}>
        <Mainhome
        // setcookie={setcookie}
        // setGlobalUser={setGlobalUser}
        // setUserID={setUserID}
        // setUserDate={setUserDate}
        />
      </div>
    );
  }
}
const a = (state) => {
  return {
    appscookie: state.cookie,
    rdxUser: state.globalUser,
    rdxUserID: state.userID,
    rdxUserDate: state.userDate,
  };
};
const b = (dispatch) => {
  return {
    getTrue: (ner) => dispatch({ type: "getCookieTrue" }),
    getUserName: (user) => dispatch({ type: "getUser", user }),
    getUserId: (Id) => dispatch({ type: "getUserId", Id }),
    getUserDate: (date) => dispatch({ type: "getUserDate", date }),
  };
};

export default connect(a, b)(App);
