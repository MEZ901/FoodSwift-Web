import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RightArrowIcon } from "../../../shared/icons";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
      <span className="inline-block text-blue-500">{icon}</span>

      <h1 className="text-xl font-semibold text-gray-700 capitalize">
        {title}
      </h1>

      <p className="text-gray-500">{description}</p>

      <Link
        to="#"
        className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      >
        <RightArrowIcon />
      </Link>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
