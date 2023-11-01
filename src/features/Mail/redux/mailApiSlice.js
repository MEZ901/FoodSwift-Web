import { apiSlice } from "../../../app/api/apiSlice";

export const mailApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/auth/verify-email?token=${data.token}`,
        method: "POST",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/send-reset-password-email",
        method: "POST",
        body: { ...data },
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/reset-password?token=${data.token}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = mailApiSlice;
