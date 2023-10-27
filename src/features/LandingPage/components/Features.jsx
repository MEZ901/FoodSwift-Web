import { features } from "../constants";
import FeatureCard from "./FeatureCard";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionAnimation}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          explore our <br /> awesome{" "}
          <span className="underline decoration-blue-500">Features</span>
        </h1>

        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Discover the Ultimate Dining Experience with Our Remarkable Features
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard {...feature} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
