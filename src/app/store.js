
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cardSlice';
import wishlistReducer from '../features/wishlistSlice';

export const store = configureStore({
  reducer: {
    allcart: cartReducer,
    wishlist: wishlistReducer,
  },
});
