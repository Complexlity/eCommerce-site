import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ShopItem } from '../interfaces'
import shopJSON from '../store/shop.json'


console.log(shopJSON)

const initialState: ShopItem[] = shopJSON



export const shopSlice = createSlice({
    name: 'All Items',
    initialState,
    reducers: {}
})

export default shopSlice.getInitialState

// {
//     name: 'firstItem',
//     id: 1,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// }, {
//     name: 'secondItem',
//     id: 2,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// }, {
//     name: 'thirdItem',
//     id: 3,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// }, {
//     name: 'fourtItem',
//     id: 4,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// }, {
//     name: 'fifthItem',
//     id: 5,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// }, {
//     name: 'sixthItemm',
//     id: 6,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// },
// {
//     name: 'seventhItem',
//     id: 7,
//     price: 100,
//     image: '../src/assets/longSleeve.jpg'
// },
// ]

