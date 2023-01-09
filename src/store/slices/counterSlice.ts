import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  totalPrice: number,
}

const initialState: CounterState = {
  value: 0,
  totalPrice: 0,
}

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
export const { increment, decrement, incrementPrice, decrementPrice, resetAll } = counterSlice.actions

export default counterSlice.reducer