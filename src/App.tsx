// App components
import Navbar from "./components/Navbar";
import RouteSwitch from "./RouteSwitch";
import Cart from "./components/Cart";
import BackToTopButton from "./components/BackToTop";

// React router functions. See https://reactrouter.com/en/main/start/overview from more information on it
import { BrowserRouter as Router } from "react-router-dom";

// Redux functions and interface to read the state data
import { useSelector } from "react-redux";
import { RootState } from "./store/index.js";
function App() {
  // Reads the current theme value and updates the dom accordingly
  const darkTheme = useSelector((state: RootState) => state.darkTheme);
  const app = darkTheme ? "App dark text-center" : "App text-center";
  return (
    <div className={`${app} mx-auto min-w-[100vw]`}>
      <Router>
        <Navbar />
        <RouteSwitch />
        <Cart />
        <BackToTopButton />
      </Router>
    </div>
  );
}

export default App;
