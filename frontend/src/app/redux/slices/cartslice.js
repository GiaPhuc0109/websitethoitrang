//cartslices
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //Tìm kiếm sản phẩm trong giỏ hàng (danh sách state.items) có _id trùng với _id của sản phẩm trong action.payload.item.
      const existingItem = state.items.find((item) => item._id === action.payload.item._id);

      if (existingItem) {
        // Nếu sản phẩm đã tồn tại cập nhật + thêm số lượng
        existingItem.quantity = Number(existingItem.quantity) + Number(action.payload.quantity);
      } else {
        // Nếu sản phẩm chưa tồn tại thêm vào giỏ hàng với số lượng được cung cấp
        state.items.push({ ...action.payload.item, quantity: action.payload.quantity });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    updateCartItemQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);

      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice;