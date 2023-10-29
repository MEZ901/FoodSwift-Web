import { Button, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../../shared/icons";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: async (values) => {
        console.log(values);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <Input
          type="email"
          variant="bordered"
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.email && errors.email ? true : false}
          errorMessage={errors.email && touched.email ? errors.email : null}
        />
      </div>

      <div className="mt-4">
        <Input
          label="Password"
          name="password"
          variant="bordered"
          type={isVisible ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.password && errors.password ? true : false}
          errorMessage={
            errors.password && touched.password ? errors.password : null
          }
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
