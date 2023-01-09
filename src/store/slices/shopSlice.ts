import { createSlice } from '@reduxjs/toolkit'
import { ShopItem } from '../../interfaces/shopItem.js'
import shopsJSON from '../data/shop.json'

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

