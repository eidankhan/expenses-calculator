// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <button className="btn btn-success float-end"> Add Income</button>
      </div>
    </>
  );
}

export default App;
