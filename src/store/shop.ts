import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ShopItem } from '../interfaces'
import shopsJSON from '../store/shop.json'

function getRandom(arr: any[], n = arr.length): any[] {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const shopJSON = getRandom(shopsJSON)

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

