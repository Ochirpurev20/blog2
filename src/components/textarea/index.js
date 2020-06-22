import React from "react";

export const Textarea = (props) => {
  return (
    <textarea
      type="textarea "
      id={props.id}
      cols="55"
      rows="6"
      onChange={(ev) => {
        props.setstate(ev.target.value);
      }}
    />
  );
};
