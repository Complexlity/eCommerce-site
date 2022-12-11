import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './cart.js'
import CounterReducer from './counterSlice.js'
import ShopItems from './shop.js'
import Overlay from './overlay.js'
import themeSlice from './theme.js'
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