import React from "react";

//text oruulah ba props oor orj irsen state functiond text iin utgiig shuud holboj ugnu
export const Textinput = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name="title"
      onChange={(ev) => {
        props.setstate(ev.target.value);
      }}
    />
  );
};
