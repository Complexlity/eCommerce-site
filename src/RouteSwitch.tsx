// React router functions. See https://reactrouter.com/en/main/start/overview from more information on it
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// The components to assign to routes
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

// This component returns on of the three routes depending on the url.
// it is toggled by the 'Link' function. See src/components/Navbar.tsx for usage
const RouteSwitch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default RouteSwitch;
