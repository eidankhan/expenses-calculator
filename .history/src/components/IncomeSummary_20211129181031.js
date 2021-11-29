import React from "react";

export const IncomeSummary = () => {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-4 my-2">
          <strong>Income</strong>
        </div>
        <div className="col-md-4 my-2 ">
          <strong>Expense</strong>
        </div>
        <div className="col-md-4 my-2">
          <strong className="float-end">Balance</strong>
        </div>
      </div>
      <div className="row border rounder" style={{ backgroundColor: "white" }}>
        <div className="col-md-4 my-2" m>
          <h6> Today </h6>
          <p className="text-success"> 55,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h6> 29-11-2021 Mon </h6>
          <p className="text-danger"> 15,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h6  className="float-end"> Activity </h6>
          <p className="text-success float-end"> 40,000</p>
        </div>
      </div>
      <div
        className="row border rounded my-1"
        style={{ backgroundColor: "white" }}
      >
        <div className="col-md-4 my-2">
          <div className="cards">
            <h6> This Week </h6>
            <p className="text-success"> 75,000</p>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <h6> 11-28 - 12-04 </h6>
          <p className="text-danger"> 40,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h6> Activity </h6>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
      <div
        className="row border rounded my-1"
        style={{ backgroundColor: "white" }}
      >
        <div className="col-md-4 my-2">
          <div className="cards">
            <h6> This Month </h6>
            <p className="text-success"> 110,000</p>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <h6> 11-01 - 11-30 </h6>
          <p className="text-danger"> 60,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h6> Activity </h6>
          <p className="text-success"> 50,000</p>
        </div>
      </div>
    </div>
  );
};
