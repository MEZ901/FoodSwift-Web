import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/Auth/redux/authSlice";
import customerReducer from "../features/Customer/redux/customerSlice";
import deliveryReducer from "../features/Delivery/redux/deliverySlice";
import managerReducer from "../features/Manager/redux/managerSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    customer: customerReducer,
    delivery: deliveryReducer,
    manager: managerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
