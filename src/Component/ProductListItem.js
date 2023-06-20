import React from "react";

function ProductListItem(props) {
  return (
    <div className=" d-flex align-items-center justify-content-center  ">
      <div className=" m-2 p-2 w-50 " style={{ border: "2px solid black" }}>
        <div>
          <img
            src={props.image}
            height={100}
            width={100}
            alt={props.title}
            className="border-radius-9 m-1 me-4"
          ></img>
        </div>
        <div>
          <h4 className="card-title text-danger me-4">{props.title}</h4>
          <h4 className="card-title text-primary me-4">{props.model}</h4>
        </div>
        <div className=" m-2 ">
          <button
            className="btn btn-success btn-sm me-4"
            onClick={props.IncrementItem}
          >
            +
          </button>
          <span className="me-4">Quantity : {props.count}</span>
          <button
            className="btn btn-danger btn-sm me-4"
            onClick={props.DecrementItem}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm me-4"
            onClick={props.RemoveItem}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
