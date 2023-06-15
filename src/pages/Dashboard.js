import React from "react";
import { Productlist } from "../Data/Productlist";
import ProdductCard from "./ProdductCard";

function Dashboard() {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {Productlist.map((picture) => (
        <ProdductCard {...picture} />
      ))}
    </div>
  );
}

export default Dashboard;
