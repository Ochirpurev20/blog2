import React, { useEffect } from "react";

export const Paging = (props) => {
  let param = new URLSearchParams(document.location.search.substring(1));
  // console.log("param is: " + param);
  let limit = parseInt(param.get("limit"));
  let page = parseInt(param.get("page"));
  if (isNaN(limit)) {
    limit = 5;
  } else console.log(limit);
  if (isNaN(page)) page = 0;
  else console.log(page);
  // console.log("limit is " + limit + " type ni " + typeof limit);
  // console.log("page is " + page + " type ni " + typeof page);
  let z = Math.ceil(props.z / limit);
  // console.log("prop z==" + props.z);

  useEffect(() => {
    for (let i = 0; i < z; i++) {
      let j = i * 5;
      let footerDiv = `<a href="list.html?limit=5&page=${j}">${i + 1}</a>`;
      document
        .getElementById("footerDiv")
        .insertAdjacentHTML("beforeend", footerDiv);
    }
  }, []);

  return (
    <div className="footerDiv" id="footerDiv">
      <p>var pagelimit is {limit}</p>
      <p> and props.z == {props.z}</p>
      <p> and z == {z}</p>
    </div>
  );
};
