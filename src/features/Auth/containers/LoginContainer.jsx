import { Button } from "@nextui-org/react";
import DeliveryManIllustrated from "../../../assets/delivery-man-illustrated.jpg";
import Logo from "../../../assets/logo.png";
import { LoginForm } from "../components";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../../../shared/icons";

const LoginContainer = () => {
  return (
    <div
      className="flex items-center p-6"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${DeliveryManIllustrated})`,
          }}
        />

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-10 sm:h-11" src={Logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600">
            Welcome back!
          </p>

          <Button
            startContent={<GoogleIcon />}
            variant="bordered"
            className="w-full mt-4"
          >
            <span className="w-5/6 font-bold text-center">
              Sign in with Google
            </span>
          </Button>

          <div className="flex items-center justify-between mt-4">
            <span className="w-2/6 border-b lg:w-2/5"></span>

            <p className="text-xs text-center text-gray-500 uppercase cursor-pointer">
              or
            </p>

            <span className="w-2/6 border-b lg:w-2/5"></span>
          </div>

          <LoginForm />

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>

            <Link
              to="/auth/register"
              className="text-xs text-gray-500 uppercase hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
