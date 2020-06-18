import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Text } from "../../components/text";

export const List = (props) => {
  const [list, setlist] = useState([]);
  let tarr = [
    {
      id: 125,
      title: "22",
      content: "www",
      created_dt: "2020-06-16T07:32:35.000Z",
      updated_dt: null,
      create_user_id: 2,
      update_user_id: null,
    },
  ];
  useEffect(() => {
    setlist(tarr);
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
          {list.map((item) => {
            let userNer;
            if (item.create_user_id === 1) userNer = "ochir";
            else if (item.create_user_id === 2) userNer = "chuka";
            else if (item.create_user_id === 3) userNer = "badral";
            return (
              <tr key={item.id}>
                <td>
                  <Text value={item.title.substring(0, 8)} />
                </td>
                <td>
                  {" "}
                  <Text value={item.content.substring(0, 15)} />
                </td>
                <td>{item.created_dt.substring(0, 10)}</td>
                <td>{userNer}</td>
                <td>
                  <Link to={`/detail/${item.id}`}>Дэлгэрэнгүй</Link>
                </td>
                <td>
                  {" "}
                  <button
                  // onClick={() => {
                  //   deleteFunc(item.id);
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
    </div>
  );
};
