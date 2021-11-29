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
      <div className="row border rounded my-2">
        <div className="col-md-4 my-2">
          <h4> Today </h4>
          <p className="text-success"> 55,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h4> 29-11-2021 Mon </h4>
          <p className="text-success"> 15,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h4> Activity </h4>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
      <div className="row border rounded">
        <div className="col-md-4 my-2">
          <div className="cards">
            <h4> This Week </h4>
            <p className="text-success"> 75,000</p>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <h4> 11-28 - 12-04 </h4>
          <p className="text-success"> 40,000</p>
        </div>
        <div className="col-md-4 my-2">
          <h4> Activity </h4>
          <p className="text-success"> 40,000</p>
        </div>
      </div>
    </div>
  );
};
