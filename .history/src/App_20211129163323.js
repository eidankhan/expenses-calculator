// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { SaveIncome } from "./components/SaveIncome";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <SaveIncome/>
      </div>
    </>
  );
}

export default App;
