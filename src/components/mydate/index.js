import React, { useEffect } from "react";

export const Mydate = (props) => {
  function gettime() {
    var currentdate = new Date();
    var datetime =
      currentdate.getFullYear() +
      "-" +
      (currentdate.getMonth() + 1) +
      "-" +
      currentdate.getDate() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    return datetime;
  }
  useEffect(() => {
    props.setstate(gettime());
    return function cleanup() {
      clearInterval();
    };
  }, []);
  return <div></div>;
};
