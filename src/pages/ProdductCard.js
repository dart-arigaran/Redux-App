import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  return (
    // <div class="col row-cols-1 row-cols-sm-0 row-cols-md-0 row-cols-lg-0 p-2">
    //   <div class="col ">
    <div
      className="card m-2 cursor-pointer "
      role="button"
      style={{ border: "2px solid black ", width: "300px", height: "500px" }}
      onClick={() => navigate(`/viewproduct/${props.id}`)}
    >
      <div>
        <img
          src={props.image}
          height={100}
          width={100}
          alt={props.title}
          className="border-radius-9 mt-2"
        ></img>
      </div>
      <div>
        <div className="card-body  ">
          <h4 className="card-title text-primary">{props.title}</h4>
          <h4 className="card-title">{props.model}</h4>
          <h4 className="card-text fs-6 lh-base">{props.body}</h4>
        </div>
        <div className=" m-2 ">
          {props.stock > 0 ? (
            <button className="btn btn-success btn-sm">Available</button>
          ) : (
            <button className="btn btn-danger btn-sm">Not Available</button>
          )}
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default ProductCard;
