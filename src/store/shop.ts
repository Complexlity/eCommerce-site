import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ShopItem } from '../interfaces'

const initialState: ShopItem[] = [

    {
        name: 'firstItem',
        id: 1,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    }, {
        name: 'secondItem',
        id: 2,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    }, {
        name: 'thirdItem',
        id: 3,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    }, {
        name: 'fourtItem',
        id: 4,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    }, {
        name: 'fifthItem',
        id: 5,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    }, {
        name: 'sixthItemm',
        id: 6,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    },
    {
        name: 'seventhItem',
        id: 7,
        price: 0,
        image: '../src/assets/longSleeve.jpg'
    },
]

export const shopSlice = createSlice({
    name: 'All Items',
    initialState,
    reducers: {}
})

export default shopSlice.getInitialState


