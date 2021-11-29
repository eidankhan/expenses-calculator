import React, { useEffect, useState } from "react";

export const IncomeSummary = () => {
  const [income, setIncome] = useState([]);

  useEffect(() => {
    setIncome([
      {
        date: "11/01/2021",
        amount: 55000,
        payer: "Employer",
        description: "Salary received for the month of November",
      },
      {
        date: "10/01/2021",
        amount: 55000,
        payer: "Employer",
        description: "Salary received for the month of October",
      },
      {
        date: "10/01/2021",
        amount: 20000,
        payer: "Fiver",
        description: "Payment received from fiver client",
      },
    ]);
  }, []);

  return (
    <div className="my-3">
      <div className="row">
        <div className="card">
          <div className="card-body">This is some text within a card body.</div>
        </div>
        <div className="card">
          <div className="card-body">This is some text within a card body.</div>
        </div>
      </div>
    </div>
  );
};
