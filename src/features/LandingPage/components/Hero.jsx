import { Button } from "@nextui-org/react";
import deliveryMan from "../../../assets/delivery-man.jpg";
import { VerifiedIcon } from "../../../shared/icons";

const Hero = () => {
  return (
    <div className="flex flex-col px-6 py-5 mx-auto space-y-6 lg:h-[28rem] lg:py-8 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
            Satisfy Your Cravings,{" "}
            <span className="text-blue-500">Anytime, Anywhere</span>
          </h1>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700">
              <VerifiedIcon />
              <span className="mx-2">Satisfyingly Simple Design</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700">
              <VerifiedIcon />
              <span className="mx-2">Effortless Integration</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700">
              <VerifiedIcon />
              <span className="mx-2">Seamless Ordering</span>
            </p>
          </div>
        </div>

        <div className="w-full mt-8 bg-transparent lg:max-w-sm">
          <Button color="primary" variant="shadow" className="w-1/2">
            JOIN US NOW
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
          src={deliveryMan}
          alt="Delivery man image"
        />
      </div>
    </div>
  );
};

export default Hero;
