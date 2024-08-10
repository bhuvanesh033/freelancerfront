import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    setCart: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.productid === action.payload.productid);
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { setCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
