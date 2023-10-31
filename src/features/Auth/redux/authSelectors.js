export const selectCurrentUser = (state) => state.auth.user;

export const selectCurrentUserId = (state) => state.auth.user?.id;

export const selectIsLoggedIn = (state) => !!state.auth.user;

export const selectIsManager = (state) =>
  state.auth.user?.roles.includes("manager");

export const selectIsDelivery = (state) =>
  state.auth.user?.roles.includes("delivery");
