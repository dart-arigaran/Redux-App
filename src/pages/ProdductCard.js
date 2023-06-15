import React from "react";

function ProdductCard(props) {
  return (
    <div className="card m-2 " style={{ border: "2px solid black" }}>
      <div>
        <img src={props.image} height={100} width={100} alt={props.title}></img>
      </div>
    </div>
  );
}

export default ProdductCard;
