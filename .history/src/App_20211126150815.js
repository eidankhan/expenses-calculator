import { Products } from "./components/Products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Products />}/>
        </Routes>
    </Router>

    // <div className="container">
    //   <Products/>
    // </div>
  );
}

export default App;
