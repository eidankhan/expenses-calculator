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
      <div className="container">
        <button className="btn btn-success"> Add Income</button>
      </div>
    </>
  );
}

export default App;
