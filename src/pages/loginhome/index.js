import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/navbar";
import { List } from "../../pages/list";
import { Redirect } from "react-router-dom";

export const Loginhome = (props) => {
  useEffect(() => {
    props.login ? doFetch(props.login) : doRedirect("/");
  });
  function doFetch(para) {
    console.log("login home n doFetch dotroos id ni: " + para);
  }
  function doRedirect(param) {
    console.log("login home n  redirect fucn s param ni : " + param);
  }
  return (
    <div className="">
      <Navbar login={props.login} />
      <List />
    </div>
  );
};
