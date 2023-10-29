import { Button, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../../shared/icons";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form>
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
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          isRequired
        />

        <div className="flex justify-between w-full mt-4">
          <Checkbox size="md">Remember me</Checkbox>
          <a href="#" className="text-xs text-gray-500 hover:underline">
            Forget Password?
          </a>
        </div>
      </div>

      <div className="mt-6">
        <Button fullWidth color="primary" type="submit">
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
