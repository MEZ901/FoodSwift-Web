import { Button } from "@nextui-org/react";
import deliveryMan from "../../../assets/delivery-man.jpg";
import { VerifiedIcon } from "../../../shared/icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col px-6 py-5 mx-auto space-y-6 lg:h-[28rem] lg:py-8 lg:flex-row lg:items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
            Satisfy Your Cravings,{" "}
            <span className="underline decoration-blue-500">Anytime</span>,{" "}
            <span className="underline decoration-blue-500">Anywhere</span>
          </h1>

          <div className="mt-8 space-y-5">
            <motion.p
              className="flex items-center -mx-2 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VerifiedIcon />
              <span className="mx-2">Satisfyingly Simple Design</span>
            </motion.p>

            <motion.p
              className="flex items-center -mx-2 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <VerifiedIcon />
              <span className="mx-2">Effortless Integration</span>
            </motion.p>

            <motion.p
              className="flex items-center -mx-2 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <VerifiedIcon />
              <span className="mx-2">Seamless Ordering</span>
            </motion.p>
          </div>
        </div>

        <motion.div
          className="w-full mt-8 bg-transparent lg:max-w-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button color="primary" variant="shadow" className="w-1/2">
            JOIN US NOW
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center justify-center w-full h-96 lg:w-1/2"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <img
          className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
          src={deliveryMan}
          alt="Delivery man image"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
