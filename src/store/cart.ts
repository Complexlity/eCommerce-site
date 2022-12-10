import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ShopItem } from '../interfaces'



const initialState: ShopItem[] = []

export const cartsSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state: ShopItem[], action: PayloadAction<ShopItem>) => {
            let newItem: ShopItem[];
            const shopItem = state.find(item => action.payload.id == item.id)
            if (shopItem) {
                shopItem.count! += 1
            }
            else state.push({ ...action.payload, count: 1 })
        },
        addToCart: (state: ShopItem[], action: PayloadAction<number>) => {
            const shopItem = state.find(item => action.payload == item.id)!
            shopItem.count! += 1
        }
    }
})


export const { addItem, addToCart } = cartsSlice.actions
export default cartsSlice.reducer