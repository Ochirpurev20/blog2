import React, { useState, useEffect, useMemo } from "react";

export const Paging = (props) => {
  const [pagenumber, setpage] = useState(0);
  const [pagelimit, setlimit] = useState(0);
  return useMemo(() => {
    let param = new URLSearchParams(document.location.search.substring(1));
    console.log("param is: " + param);
    let limit = parseInt(param.get("limit"));
    let page = parseInt(param.get("page"));
    let q = props.z;
    if (isNaN(limit)) {
      limit = 5;
    } else console.log(limit);
    if (isNaN(page)) page = 0;
    else console.log(page);
    console.log("limit is " + limit + " type ni " + typeof limit);
    console.log("page is " + page + " type ni " + typeof page);
    setlimit(limit);
    setpage(page);
    let z = Math.ceil(q / pagelimit);
    console.log("prop z==" + props.z);
    for (let i = 0; i < z; i++) {
      let j = i * 5;
      console.log(i);
      let footerDiv = `<a href="list.html?limit=5&page=${j}">${i + 1}</a>`;
      document
        .getElementById("footerDiv")
        .insertAdjacentHTML("beforeend", footerDiv);
    }

    return (
      <div className="footerDiv" id="footerDiv">
        {" "}
        <p>var pagelimit is {pagelimit}</p>
        <p>
          {" "}
          var pagenumber is {pagenumber} and props.z == {props.z}
        </p>{" "}
        {}
      </div>
    );
  });
};
