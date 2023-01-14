// See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
import { createSlice } from "@reduxjs/toolkit";

// Reads the theme from local storage or returns false if not found
const themeFromStorage = !!localStorage.getItem("darkTheme")

// Initializes the theme as a boolean
const initialState: boolean = themeFromStorage


// This only has a function to change the theme and also write the changes to localStorage
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