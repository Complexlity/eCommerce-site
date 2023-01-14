// See https://redux-toolkit.js.org/tutorials/quick-start for more information about redux functions used in this code
import { createSlice } from '@reduxjs/toolkit'

// Blueprint of a shop item. See src/interfaces for more information
import { ShopItem } from '../../interfaces/shopItem.js'

// Gets the shop items data
import shopsJSON from '../data/shop.json'

// Utitlity function to shuffle an array
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

// Shuffles the store data so it shows in a different order each times
const shopJSON = getRandom(shopsJSON)

// Initialized the store items
const initialState: ShopItem[] = shopJSON

// This contains no reducers because we are not fetching more items. 
// If were were, then we could have to create some functions here to update the store state
export const shopSlice = createSlice({
    name: 'All Items',
    initialState,
    reducers: {}
})

export default shopSlice.getInitialState // Used to create the store in src/store/index.ts

