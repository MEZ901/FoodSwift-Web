import propTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TestimonialCard = ({ content, profile, name }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      className="p-6 bg-gray-100 rounded-lg md:p-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
      ref={ref}
    >
      <p className="leading-loose text-gray-500">{content}</p>

      <div className="flex items-center mt-6">
        <img
          className="object-cover rounded-full w-14 h-14"
          src={profile}
          alt="profile"
        />

        <div className="mx-4">
          <h1 className="font-semibold text-blue-500">{name}</h1>
        </div>
      </div>
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  content: propTypes.string.isRequired,
  profile: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default TestimonialCard;
