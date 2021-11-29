// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

import { Income } from "./components/Income";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Income/>
      </div>
    </>
  );
}

export default App;
