import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./store/counterSlice"
import type { RootState } from './store/index.js'


function App() {
  const count = useSelector((state: RootState) => state.counter.value )
  const dispatch = useDispatch()
  return (
    <div className="App h-screen bg-orange-500 mx-auto text-center text-5xl">
      <Navbar />
      <Home />
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="mt-10">{count}</div>
    </div>
  )
}

export default App
