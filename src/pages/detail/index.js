import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";
import { Textarea } from "../../components/textarea";

export const Detail = (props) => {
  const [edit, setEdit] = useState(false);
  const [tempData, setTempData] = useState([]);
  let newTempData = {};
  useEffect(() => {
    fetch(`/api/read/${tempId}`)
      .then((res) => res.json())
      .then((data) => {
        setTempData(data.post);
      });
  }, []);

  let tempId = props.id.match.params.id;

  function editBtn() {
    setEdit(true);
  }
  function saveBtn() {
    newTempData = { ...tempData };
    let newUpdateDate = gettime();
    newTempData.updated_dt = newUpdateDate;
    newTempData.update_user_id = props.user;

    fetch("/api/update", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify({
        id: newTempData.id,
        title: newTempData.title,
        content: newTempData.content,
        date: newTempData.updated_dt,
        user: newTempData.update_user_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.status));
    setEdit(false);
  }

  const setTitle = (value) => {
    setTempData({ ...tempData, title: value });
  };
  const setContent = (value) => {
    setTempData({ ...tempData, content: value });
  };
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

  let tempEdituser;
  !tempData.update_user_id
    ? (tempEdituser = "Одоогоор засаагүй байна")
    : (tempEdituser = tempData.update_user_id);
  let tempEditDate;
  !tempData.updated_dt
    ? (tempEditDate = "Одоогоор засаагүй байна")
    : (tempEditDate = tempData.updated_dt);
  if (edit) {
    return (
      <div className={style.detail}>
        <Text value="Гарчиг" />
        <br />
        <Textinput id="title" setstate={setTitle} value={tempData.title} />
        <br />
        <Textarea id="content" setstate={setContent} value={tempData.content}>
          {tempData.content}
        </Textarea>
        <br />
        <br />
        <div className={style.userContainer}>
          <div className={style.leftInfo}>
            <label>Үүсгэсэн хэрэглэгч</label>
            <Text value={tempData.create_user_id} />
            <label>Үүсгэсэн хугацаа</label>
            <Text value={tempData.created_dt} />
          </div>
          <div className={style.rigthInfo}>
            <label>Зассан хэрэглэгч</label>
            <Text value={props.user} />
            <label>Зассан хугацаа</label>
            <Text value={Date()} />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            saveBtn();
          }}
        >
          hadgalav
        </button>
      </div>
    );
  }

  return (
    <div className={style.detail}>
      <Text value={tempData.title} />
      <br />
      <Text value={tempData.content} />
      <br />
      <div className={style.userContainer}>
        <div className={style.leftInfo}>
          <label>Үүсгэсэн хэрэглэгч</label>
          <Text value={tempData.create_user_id} />
          <label>Үүсгэсэн хугацаа</label>
          <Text value={tempData.created_dt} />
        </div>
        <div className={style.rigthInfo}>
          <label>Зассан хэрэглэгч</label>
          <Text value={tempEdituser} />
          <label>Зассан хугацаа</label>
          <Text value={tempEditDate} />
        </div>
      </div>
      <button
        onClick={() => {
          editBtn();
        }}
      >
        Засах
      </button>
    </div>
  );
};
