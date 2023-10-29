import { Button } from "@nextui-org/react";
import { RegisterForm } from "../components";
import { GoogleIcon } from "../../../shared/icons";

const RegisterContainer = () => {
  return (
    <>
      <div className="mt-4">
        <Button
          startContent={<GoogleIcon />}
          variant="bordered"
          className="w-full mt-4"
        >
          <span className="w-5/6 font-bold text-center">
            Sign up with Google
          </span>
        </Button>

        <div className="flex items-center justify-between mt-4">
          <span className="w-2/6 border-b lg:w-2/5"></span>

          <p className="text-xs text-center text-gray-500 uppercase cursor-pointer">
            or
          </p>

          <span className="w-2/6 border-b lg:w-2/5"></span>
        </div>
      </div>
      <RegisterForm />
    </>
  );
};

export default RegisterContainer;
