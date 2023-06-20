import React from "react";
import { Productlist } from "../Data/Productlist";
import ProductCard from "./ProdductCard";

function Dashboard() {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {Productlist.map((picture, index) => (
        <ProductCard {...picture} key={index} />
      ))}
    </div>
  );
}

export default Dashboard;
