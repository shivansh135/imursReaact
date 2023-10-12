import './App.css';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Plan from './component/plans/plan';
import { Home } from './component/pricing/home';
import Product from './component/product/product';
import { NavbarLanding } from './component/navbarLanding/navbar';
import { PropertyFooterWrapper } from './component/footer/footer';
import Price from './component/price/price';


function App() {
  return (
    <>
    <Router>
 <NavbarLanding/>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/price" element={<Price/>} />
          <Route path="/plans" element={<Plan/>} />
        </Routes>
      </div>
      <PropertyFooterWrapper/>
    </Router>
</>
  );
}

export default App;

