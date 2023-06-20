import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Card";
export default configureStore({
  reducer: {
    cart: cardReducer,
  },
});
