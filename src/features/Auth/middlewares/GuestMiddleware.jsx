import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/authSelectors";

const GuestMiddleware = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/customer" />;
  }

  return children;
};

GuestMiddleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestMiddleware;
