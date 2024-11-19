import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (

    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! Trang hiện không tồn tại</h2>
        <p>
          Trang bạn đang tìm kiếm không tồn tại, bị xóa hoặc thông tin đã bị thay
          đổi.{" "}
        </p>
        <a href="https://matbaobpo.com/">Trở lại trang chủ</a>
      </div>
    </div>
  );
}

export default App;
