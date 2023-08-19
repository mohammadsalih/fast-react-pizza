import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      id: 1,
      name: 'Pizza',
      quantity: 1,
      unitPrice: 10,
      totalPrice: 10,
    },
    {
      id: 2,
      name: 'Pizza tacco ',
      quantity: 4,
      unitPrice: 14,
      totalPrice: 56,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart = action.payload;
    },
    deleteItem(state, action) {
      state.cart = action.payload;
    },
    IncreaseItemQuantity(state, action) {
      state.cart = action.payload;
    },
    decreaseItemQuantity(state, action) {
      state.cart = action.payload;
    },
    clearCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;
