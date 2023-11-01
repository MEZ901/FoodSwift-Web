import { apiSlice } from "../../../app/api/apiSlice";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    customerProfile: builder.query({
      query: () => `/customer/profile`,
    }),
  }),
});

export const { useCustomerProfileQuery } = customerApiSlice;
