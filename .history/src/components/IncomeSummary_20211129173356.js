import React from "react";

export const IncomeSummary = () => {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-4 my-2 text-center ">
          {" "}
          <strong>Income</strong>{" "}
        </div>
        <div className="col-md-4 my-2 text-center ">
          {" "}
          <strong>Expense</strong>{" "}
        </div>
        <div className="col-md-4 my-2 text-center ">
          {" "}
          <strong>Balance</strong>{" "}
        </div>
      </div>
      <div className="row border rounder" style={{backgroundColor: "white"}}>
        <div className="col-md-4 my-2 text-center" m>
          <h6> Today </h6>
          <p className="text-success"> 55,000</p>
        </div>
        <div className="col-md-4 my-2 text-center">
          <h6> 29-11-2021 Mon </h6>
          <p className="text-danger"> 15,000</p>
        </div>
        <div className="col-md-4 my-2 text-center">
          <h6> Activity </h6>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
      <div className="row border rounded my-1" style={{backgroundColor: "white"}}>
        <div className="col-md-4 my-2 text-center">
          <div className="cards">
            <h6> This Week </h6>
            <p className="text-success"> 75,000</p>
          </div>
        </div>
        <div className="col-md-4 my-2 text-center">
          <h6> 11-28 - 12-04 </h6>
          <p className="text-danger"> 40,000</p>
        </div>
        <div className="col-md-4 my-2 text-center">
          <h6> Activity </h6>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
      <div className="row border rounded my-1" style={{backgroundColor: "white"}}>
        <div className="col-md-4 my-2 text-center">
          <div className="cards">
            <h6> This Month </h6>
            <p className="text-success"> 110,000</p>
          </div>
        </div>
        <div className="col-md-4 my-2 text-center">
          <h6> 11-01 - 11-30 </h6>
          <p className="text-danger"> 60,000</p>
        </div>
        <div className="col-md-4 my-2 text-center">
          <h6> Activity </h6>
          <p className="text-success"> 50,000</p>
        </div>
      </div>
    </div>
  );
};