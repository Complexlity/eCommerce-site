// See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Gets the shop item interface. See src/interfaces for more information
import { ShopItem } from '../../interfaces/shopItem.js'



const initialState: ShopItem[] = []

// Contains functions to add an item, remove an item as well as clear all items
export const cartsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state: ShopItem[], action: PayloadAction<ShopItem>) => {
            const shopItem = state.find(item => action.payload.id === item.id)
            if (shopItem) {
                shopItem.count! += 1
            }
            else state.push({ ...action.payload, count: 1 })
        },
        removeItem: (state: ShopItem[], action: PayloadAction<ShopItem>) => {
            const shopItem = state.find(item => action.payload.id === item.id)
            if (shopItem && shopItem.count! > 1) shopItem.count! -= 1
            else return state.filter(item => item.id !== action.payload.id)
        },
        resetCart: (state: ShopItem[]) => {
            return state = []
        }

    }
})


export const { addItem, removeItem, resetCart } = cartsSlice.actions // Functions used by components to update date in the store
export default cartsSlice.reducer // Used to create the store in src/store/index.ts