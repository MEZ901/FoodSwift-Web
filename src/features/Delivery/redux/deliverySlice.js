import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = deliverySlice.actions;

export default deliverySlice.reducer;
