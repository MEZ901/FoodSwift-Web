import { apiSlice } from "../../../app/api/apiSlice";

export const deliveryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deliveryProfile: builder.query({
      query: () => `/delivery/profile`,
    }),
  }),
});

export const { useDeliveryProfileQuery } = deliveryApiSlice;
