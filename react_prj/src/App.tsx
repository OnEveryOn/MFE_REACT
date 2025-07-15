import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./layout/Header";
import UserManage from "./page/UserManage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/userManage" element={<UserManage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
