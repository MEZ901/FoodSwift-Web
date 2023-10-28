import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../constants";

const Testimonials = () => {
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
      className="bg-white"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionAnimation}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-blue-500 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} inView={inView} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
