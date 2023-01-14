// See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Creates blue print of the counter objects
export interface CounterState {
  value: number,
  totalPrice: number,
}

// Initializes the object using the specified blue pring
const initialState: CounterState = {
  value: 0,
  totalPrice: 0,
}

// Contains function to update the number of items bought as well as the currrent prices
// These values used in the Cart and Navbar components
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetAll: (state) => {
      state.value = 0
      state.totalPrice = 0
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload
    },
    decrementPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload
    },

  },
})

// Action creators are generated for each case reducer function
// Functions used by components to update date in the store
export const { increment, decrement, incrementPrice, decrementPrice, resetAll } = counterSlice.actions

export default counterSlice.reducer // Used to create the store in src/store/index.ts