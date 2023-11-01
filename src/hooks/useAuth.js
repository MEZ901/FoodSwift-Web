import store from "../app/store";

const useAuth = () => {
  const isLoggedIn = store.getState().auth.user;
  return { isLoggedIn };
};

export default useAuth;
