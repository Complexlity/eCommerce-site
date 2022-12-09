import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products"

const RouteSwitch = () => {
    return (  
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/products' element={<Products/>} />
            </Routes>

        );
}
 
export default RouteSwitch;