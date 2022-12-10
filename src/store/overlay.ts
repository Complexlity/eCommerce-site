import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false

export const overlaySlice = createSlice({
    name: 'Overlay',
    initialState,
    reducers: {
        toggleOverlay: ((state: boolean) => {
            console.log(state)
            return !state

        })
    }
})

export const { toggleOverlay } = overlaySlice.actions
export default overlaySlice.reducer