import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeFromStorage = !!localStorage.getItem("darkTheme")
const initialState: boolean = themeFromStorage



export const themeSlice = createSlice({
    name: 'darkTheme',
    initialState,
    reducers: {
        toggleTheme: ((state: boolean) => {
            if (!state) localStorage.setItem('darkTheme', "yes")
            else localStorage.removeItem('darkTheme')
            return !state
        })
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer