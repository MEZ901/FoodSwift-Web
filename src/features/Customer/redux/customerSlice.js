import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = customerSlice.actions;

export default customerSlice.reducer;
