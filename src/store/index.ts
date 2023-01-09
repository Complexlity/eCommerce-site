import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './slices/cartSlice.js'
import CounterReducer from './slices/counterSlice.js'
import ShopItems from './slices/shopSlice.js'
import Overlay from './slices/overlaySlice.js'
import themeSlice from './slices/themeSlice.js'
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    cartList: CartReducer,
    itemsList: ShopItems,
    overlay: Overlay,
    darkTheme: themeSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch