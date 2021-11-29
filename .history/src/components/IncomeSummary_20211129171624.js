import React from "react";

export const IncomeSummary = () => {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-4 my-2 ">
          {" "}
          <strong>Income</strong>{" "}
        </div>
        <div className="col-md-4 my-2 ">
          {" "}
          <strong>Expense</strong>{" "}
        </div>
        <div className="col-md-4 my-2 ">
          {" "}
          <strong>Balance</strong>{" "}
        </div>
      </div>
      <div className="row border rounder">
        <div className="col-md-4 my-2">
          <h5> Today </h5>
          <p className="text-success"> 55,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h5> 29-11-2021 Mon </h5>
          <p className="text-success"> 15,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h5> Activity </h5>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
      <div className="row border rounded">
        <div className="col-md-4 my-2">
          <div className="cards">
            <h5> This Week </h5>
            <p className="text-success"> 75,000</p>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <h5> 11-28 - 12-04 </h5>
          <p className="text-success"> 40,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h5> Activity </h5>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
    </div>
  );
};
