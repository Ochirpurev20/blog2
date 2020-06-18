import React, { useEffect } from "react";

export const User = (props) => {
  let user1 = props.users;
  useEffect(() => {
    user1.map((user) => {
      let option = `<option value = ${user}> ${user}</option>`;
      document.getElementById("user").insertAdjacentHTML("beforeend", option);
    });
    // props.setstate(...[], ["ochir"]);
  }, []);

  return (
    <select
      id="user"
      onChange={(e) => props.setstate(...[], [e.target.value])}
    ></select>
  );
};
