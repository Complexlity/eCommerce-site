import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false

export const themeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        toggleTheme: ((state: boolean) => {
            return !state
        })
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer