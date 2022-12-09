import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from "./src/store/counterSlice"
import type { RootState } from './src/store/index.js'


const Test = () => {
     const count = useSelector((state: RootState) => state.counter.value )
  const dispatch = useDispatch()
 
    return ( 
<div>
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
        <div className="mt-8"><button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button></div>
        <div className="mt-8"><button onClick={() => dispatch(decrementByAmount(10))}>Decrement by 10</button></div>
        </div>
     );
}
 
export default Test;