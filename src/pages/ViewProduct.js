import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Productlist } from "../Data/Productlist";
import { addItem } from "../Redux/Card";

function ViewProduct() {
  const params = useParams();
  const dispatch = useDispatch();
  const props = Productlist.find(
    (element) => element.id === parseInt(params.id)
  );
  const Addtocart = () => {
    dispatch(addItem(props));
  };
  return (
    <div className=" d-flex align-items-center justify-content-center  ">
      <div
        className="card m-2"
        style={{ border: "2px solid black ", width: "500px", height: "500px" }}
      >
        <div className="mt-2">
          <img
            src={props.image}
            height={200}
            width={200}
            alt={props.title}
            className="border-radius-9"
          ></img>
        </div>
        <div>
          <div className="card-body"></div>
          <h4 className="card-title"> {props.title}</h4>
          <h4 className="card-title"> {props.model}</h4>
          <h3>Stock : {props.stock}</h3>
          <h6>{props.body}</h6>
          <p></p>
        </div>
        <div className=" m-2 ">
          {props.stock > 0 ? (
            <>
              <button className="btn btn-success btn-sm me-4">Buy</button>
              <button className="btn btn-success btn-sm" onClick={Addtocart}>
                Add to cart
              </button>
            </>
          ) : (
            <button className="btn btn-danger btn-sm">Not Available</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
