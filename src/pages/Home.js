import React from "react";
import { Route, Routes } from "react-router-dom";
import AddtoCard from "./AddtoCard";
import Dashboard from "./Dashboard";
import Header from "./Header";
import ViewProduct from "./ViewProduct";

function Home() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/viewproduct/:id" element={<ViewProduct />}></Route>
        <Route path="/addtocard" element={<AddtoCard />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
