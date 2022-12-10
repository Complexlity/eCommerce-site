import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/index.js";
import { toggleOverlay } from "./store/overlay";
import { GrClose } from "react-icons/gr";
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";
const overlay: boolean = true;

function App() {
  const overlay = useSelector((state: RootState) => state.overlay);
  const dispatch = useDispatch();
  return (
    <div className="App   bg-orange-500 text-center">
      <Router>
        <Navbar />
        {overlay && (
          <div className="z-2 fixed inset-0  h-screen">
            <div className=" absolute inset-0 h-full w-full bg-gray-800 opacity-[80%]"></div>
            <div className=" absolute top-0 right-0 h-full w-[60%] max-w-[500px] bg-white opacity-[100%]">
              <div
                className="absolute left-4 top-4"
                onClick={() => dispatch(toggleOverlay())}
              >
                <GrClose size={"30"} />
              </div>
            </div>
          </div>
        )}

        <RouteSwitch />
      </Router>
    </div>
  );
}

export default App;
