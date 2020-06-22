import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Text } from "../../components/text";
import { Paging } from "../../components/paging";

export const List = (props) => {
  const [tarrList, settarrlist] = useState([]);
  useEffect(() => {
    fetch("/api/read/", {
      headers: { "content-type": "application/json" },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("res data: " + JSON.stringify(data.results));
        settarrlist(Object.entries(data.results));
      });
  }, []);

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
            let userNer;
            if (item[1].create_user_id === 1) userNer = "ochir";
            else if (item[1].create_user_id === 2) userNer = "chuka";
            else if (item[1].create_user_id === 3) userNer = "badral";
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
                <td>{userNer}</td>
                <td>
                  <Link to={`/detail/${item[1].id}`}>Дэлгэрэнгүй</Link>
                </td>
                <td>
                  {" "}
                  <button
                  // onClick={() => {
                  //   deleteFunc(item[1].id);
                  // }}
                  >
                    Устгах
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Paging z={tarrList.length} />
    </div>
  );
};
