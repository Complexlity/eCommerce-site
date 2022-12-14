import Navbar from "./components/Navbar";
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import { RootState } from "./store/index.js";
import BackToTopButton from "./components/BackToTop";
function App() {
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
