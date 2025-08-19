import React from "react";
import menspro from "../data/menspro";

const Men = () => {
  return (
    <>
      {/* <h1>mens data</h1> */}

      <div className="container" data-aos="flip-left">
        <div className="row">
          {menspro.map((ele) => {
          return (
            <div  className="col-lg-3 col-md-6 col-12 my-3">
              <div className="card" style={{ width: "16rem" }}>
                <img src={ele.pic} width={170} height={260} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">
                  PKR Rs. {ele.price} /-
                  </p>
                  <a href="#" className="btn btn-dark">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Men;
