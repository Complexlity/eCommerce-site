import Navbar from "./components/Navbar";
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import { RootState } from "./store/index.js";
function App() {
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const app = darkTheme ? "App dark text-center" : "App text-center";
  return (
    <div className={app}>
      <Router>
        <Navbar />
        <RouteSwitch />
        <Cart />
      </Router>
    </div>
  );
}

export default App;
