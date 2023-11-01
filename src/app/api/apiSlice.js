import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../../features/Auth/redux/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/v1/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("content-type", "application/json");
    headers.set("accept", "application/json");
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("Sending refresh token ...");

    const refreshResult = await baseQuery(
      "auth/refresh-token",
      api,
      extraOptions
    );

    if (refreshResult?.error) {
      console.log("Refresh token failed");
      api.dispatch(logOut());
      localStorage.removeItem("user");
    } else {
      console.log("Refresh token success");
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
