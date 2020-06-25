import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Text } from "../../components/text";

export const List = (props) => {
  const [tarrList, settarrlist] = useState([]);
  const [List, setList] = useState([]);
  const [counter, setCounter] = useState(0);
  let pageContent = [];
  useEffect(() => {
    fetch("/api/read/", {
      headers: { "content-type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCounter(Object.entries(data.results).length);
        settarrlist(Object.entries(data.results));
      });
  }, []);
  let limit = 5;
  let z = Math.ceil(counter / limit);
  for (let i = 0; i < z; i++) {
    console.log("UE for:", i);
    let j = i * 5;
    pageContent.push(
      <p key={j} onClick={() => printList({ j })}>
        {" "}
        {i + 1}
      </p>
    );
  }
  console.log(pageContent);

  function printList(y) {
    let z = Number(y);
    let a = z + 5;
    for (let i = z; i < a; i++) {
      console.log("i==" + i);
      // console.log("tarrList.length==", tarrList.length);
    }
  }
  //id deerh row g ustgah
  function deleteFunc(id) {
    fetch("http://blog.mn/api/delete", {
      headers: { "Content-type": "application/json" },
      method: "delete",
      body: JSON.stringify({ id }),
    });
    location.reload();
  }

  return (
    <div className={style.list}>
      <table id="mainTable">
        <thead>
          <tr>
            <th>Гарчиг</th>
            <th>Агуулга</th>
            <th>Огноо</th>
            <th>Хэрэглэгч</th>
            <th>Дэлгэрэнгүй</th>
            <th>Устгах</th>
          </tr>
        </thead>
        <tbody id="listTable">
          {tarrList.map((item) => {
            return (
              <tr key={item[1].id}>
                <td>
                  <Text value={item[1].title.substring(0, 8)} />
                </td>
                <td>
                  {" "}
                  <Text value={item[1].content.substring(0, 15)} />
                </td>
                <td>{item[1].created_dt.substring(0, 10)}</td>
                <td>{item[1].create_user_id}</td>
                <td>
                  <Link to={`/detail/${item[1].id}`}>Дэлгэрэнгүй</Link>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      deleteFunc(item[1].id);
                    }}
                  >
                    Устгах
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={style.paging} id="footerDiv">
        <br />
        {pageContent}
      </div>
    </div>
  );
};
