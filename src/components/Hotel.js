import React from "react";
import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
  const { _id,name, place, Description, Price, img } = hotel;

  return (
    <>
      <div className="col mt-5">
        <div className="card h-100">
          <img src={img} style={{height:"15rem"}} alt="hotels" />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 className="card-title">{place}</h5>
            <p className="card-text">{Description}</p>
            <h5>${Price}</h5>
          </div>
          <Link to={`/book-hotel/${_id}`} style={{textDecoration:"none"}}>
          <div className="d-grid" >
            <button className="btn btn-warning fs-5 fw-bold" >Book Now</button>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hotel;
