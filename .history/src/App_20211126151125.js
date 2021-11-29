import { Products } from "./components/Products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/products/:id" element={<ProductDetails />}/>
        </Routes>
    </Router>

    // <div className="container">
    //   <Products/>
    // </div>
  );
}

export default App;
