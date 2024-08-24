import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../ProductData";

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

// Load state from localStorage
const preloadedState = loadState();

const initialState = preloadedState ? preloadedState.card : {
  cart: [],
  items: ProductData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({
          id,
          title,
          price,
          quantity: 1,
          image,
        });
      }

      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save state to localStorage
      saveState({ card: state });
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);

      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save state to localStorage
      saveState({ card: state });
    },
    incrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToIncrement = state.cart.find((item) => item.id === itemId);
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;

        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Save state to localStorage
        saveState({ card: state });
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToDecrement = state.cart.find((item) => item.id === itemId);
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;

        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Save state to localStorage
        saveState({ card: state });
      }
    },
  },
});

// Export actions and reducer
export const { addToCart, removeItem, incrementItemQuantity, decrementItemQuantity } = cardSlice.actions;
export default cardSlice.reducer;
