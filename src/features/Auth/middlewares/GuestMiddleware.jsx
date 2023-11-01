import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/authSelectors";
import { RedirectBack } from "../../../utils/helpers";

const GuestMiddleware = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <RedirectBack />;
  }

  return children;
};

GuestMiddleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestMiddleware;
