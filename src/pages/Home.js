import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
