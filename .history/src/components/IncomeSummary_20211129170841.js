import React from "react";

export const IncomeSummary = () => {


  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-4 my-2 text-center"> <strong>Income</strong> </div>
        <div className="col-md-4 my-2 text-center"> <strong>Expense</strong> </div>
        <div className="col-md-4 my-2 text-center"> <strong>Balance</strong> </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"> Today </h4>
              <p className="text-success"> 55,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title"> 29-11-2021 Mon </h4>
            <p className="text-success"> 15,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title"> Activity </h4>
            <p className="text-success"> 40,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-2">
          <div className="cards">
            
              <h4 className="card-title"> This Week </h4>
              <p className="text-success"> 75,000</p>
            
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title"> 11-28 - 12-04 </h4>
            <p className="text-success"> 40,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title"> Activity </h4>
            <p className="text-success"> 40,000</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
