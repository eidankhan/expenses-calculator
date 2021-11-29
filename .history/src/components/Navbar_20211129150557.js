import React from "react";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <strong> Expenses Calculator</strong>
          <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
      Bootstrap
    </a>
        </div>
      </nav>
    </div>
  );
};
