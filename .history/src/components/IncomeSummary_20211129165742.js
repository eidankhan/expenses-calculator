import React from "react";

export const IncomeSummary = () => {


  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-4 my-2 text-center"> Income</div>
        <div className="col-md-4 my-2 text-center"> Expense</div>
        <div className="col-md-4 my-2 text-center"> Balance</div>
      </div>
      <div className="row">
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="col-md-4 my-2">
          <div className="card">
            <div className="card-body">
              This is some text within a card body.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
