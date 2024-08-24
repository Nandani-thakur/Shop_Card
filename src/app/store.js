// import { configureStore } from "@reduxjs/toolkit";
// import cardReducer from '../features/cardSlice'

// export const store = configureStore({
//   reducer: {
//     allcart:cardReducer,
    
    
//   },
// });

// src/app/store.js or wherever you configure your Redux store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cardSlice';
import wishlistReducer from '../features/wishlistSlice';

export const store = configureStore({
  reducer: {
    allcart: cartReducer,
    wishlist: wishlistReducer,
  },
});
