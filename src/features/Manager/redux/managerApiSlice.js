import { apiSlice } from "../../../app/api/apiSlice";

export const managerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    managerProfile: builder.query({
      query: () => `/manager/profile`,
    }),
  }),
});

export const { useManagerProfileQuery } = managerApiSlice;
