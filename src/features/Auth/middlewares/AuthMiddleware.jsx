import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/authSelectors";

const AuthMiddleware = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

AuthMiddleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthMiddleware;
