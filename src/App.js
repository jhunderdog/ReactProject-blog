/* eslint-disable */

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  function 반복된UI() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>d</div>);
    }
    return 어레이;
  }

  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "존나짜증나",
    "잘견디자..",
  ]);
  let posts = "강남 고기 맛집";
  let [따봉, 따봉변경] = useState(0);
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자코트추천";
    글제목변경(newArray);
  }
  let [modal, modal변경] = useState(false);
  var 어레이 = [2, 3, 4];
  var 뉴어레이 = 어레이.map(function (a) {
    return a * 2;
  });
  console.log(뉴어레이);
  return (
    <div className="App">
      {반복된UI()}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>👠</button>
      {글제목.map((글) => {
        return (
          <div className="list">
            <h3>{글}</h3>
            <span
              onClick={() => {
                따봉변경(따봉 + 1);
              }}
            >
              👍
            </span>
            {따봉}
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3
          onClick={() => {
            modal변경(!modal);
          }}
        >
          {글제목[2]}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>글제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  );
}
export default App;
