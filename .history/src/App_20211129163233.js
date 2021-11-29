// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import { Income, SaveIncome } from "./components/SaveIncome";
import { Navbar } from "./components/Navbar";

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
