import Navbar from "./components/Navbar"
import RouteSwitch from "./RouteSwitch"
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App h-screen bg-orange-500 mx-auto text-center text-5xl">
      <Router>
        <Navbar />
        <RouteSwitch />
      </Router>
    </div>
  )
}

export default App
