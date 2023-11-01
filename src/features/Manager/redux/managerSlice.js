import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = managerSlice.actions;

export default managerSlice.reducer;
