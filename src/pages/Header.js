import React from "react";

function Header() {
  return (
    <div className="p-3 bg-secondary">
      <h1>Header</h1>
      <div className="row justify-content-center pt-2 pb-2">
        <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 d-flex">
          <button className="btn btn-success me-3">Home</button>
          <input
            type="search"
            className="form-control"
            placeholder="Search ...."
          />
          <button type="submit" className="btn btn-success ">
            Search
          </button>
          <button className="btn btn-success ms-3">Card</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
