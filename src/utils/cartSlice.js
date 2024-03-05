import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla (Older) Redux => Don't mutate the state, return was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux toolkit uses immer behind the scenes => Don't return, mutate the state directly
      //mutating the state here
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      // Either Mutate the existing stateor return a new state
      // state = []; // This will not work

      // state.cartItems = []; // This will work
      // state.cartItems.length = 0; // This will work
      return { cartItems: [] }; // This will work // this new object will be replaced inside originalState = { cartItems: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
