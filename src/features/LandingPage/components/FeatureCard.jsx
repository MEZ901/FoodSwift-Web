import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RightArrowIcon } from "../../../shared/icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="p-8 space-y-3 border-2 border-blue-400 rounded-xl"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardAnimation}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
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
    </motion.div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
