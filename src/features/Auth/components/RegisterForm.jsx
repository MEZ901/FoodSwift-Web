import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  UploadIcon,
} from "../../../shared/icons";

const RegisterForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const togglePasswordConfirmationVisibility = () =>
    setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible);

  return (
    <form>
      <div className="mt-4 flex gap-4">
        <Input type="text" variant="bordered" label="First Name" isRequired />
        <Input type="text" variant="bordered" label="Last Name" isRequired />
      </div>

      <div className="mt-4">
        <Input type="text" variant="bordered" label="Phone number" />
      </div>

      <div className="mt-4">
        <label
          htmlFor="dropzone-file"
          className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer border-gray-300 hover:border-gray-400"
        >
          <UploadIcon />

          <h2 className="mx-3 text-gray-400">Profile Photo</h2>

          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="mt-4">
        <Input type="email" variant="bordered" label="Email" isRequired />
      </div>

      <div className="mt-4">
        <Input
          label="Password"
          variant="bordered"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isPasswordVisible ? "text" : "password"}
          isRequired
        />
      </div>

      <div className="mt-4">
        <Input
          label="Confirm Password"
          variant="bordered"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={togglePasswordConfirmationVisibility}
            >
              {isPasswordConfirmationVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isPasswordConfirmationVisible ? "text" : "password"}
          isRequired
        />
      </div>

      <div className="mt-6">
        <Button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
