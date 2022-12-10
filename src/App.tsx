import Navbar from "./components/Navbar";
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App   bg-orange-500 text-center">
      <Router>
        <Navbar />
        <Cart />
        <RouteSwitch />
      </Router>
    </div>
  );
}

export default App;
