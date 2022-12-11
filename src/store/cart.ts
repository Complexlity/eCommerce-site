import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ShopItem } from '../interfaces'
import shop from './shop'



const initialState: ShopItem[] = []

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


export const { addItem, removeItem, resetCart } = cartsSlice.actions
export default cartsSlice.reducer