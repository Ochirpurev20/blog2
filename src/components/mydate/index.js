import React, { useState } from "react";

export const Mydate = (props) => {
  const [mydate, setmydate] = useState("");
  setInterval(() => {
    setmydate(gettime());
    props.setstate(mydate);
  }, 1000);
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
  return (
    <div>
      <p>Үүссэн хугацаа: {mydate}</p>
    </div>
  );
};
