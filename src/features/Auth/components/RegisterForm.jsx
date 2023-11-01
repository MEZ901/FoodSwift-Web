import { Button, Checkbox, Input, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../../../shared/icons";
import TermsModal from "./TermsModal";
import { useFormik } from "formik";
import { registerSchema } from "../schemas";
import { useRegisterMutation } from "../redux/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";
import { encryptData } from "../../../utils/helpers";
import Alert from "../../../shared/components/Alert";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [error, setError] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const togglePasswordConfirmationVisibility = () =>
    setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible);

  const [register, { isLoading }] = useRegisterMutation();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: registerSchema,
      // eslint-disable-next-line no-unused-vars
      onSubmit: async ({ passwordConfirmation, ...rest }) => {
        try {
          const { user } = await register(rest).unwrap();

          dispatch(setCredentials({ ...user }));

          const encryptedUser = encryptData(user);
          localStorage.setItem("user", encryptedUser);

          navigate("/profile");
        } catch (error) {
          if (!error?.data) setError("No response");
          else if (error?.status === 400) setError("Invalid credentials");
          else if (error?.status === 409) setError("Email already exists");
          else if (error?.status === 500) setError("Internal server error");
          else setError("register failed");
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert mode="error" message={error} onClose={() => setError(null)} />
      )}
      <div className="mt-4 flex gap-4">
        <Input
          type="text"
          variant="bordered"
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.firstName && errors.firstName ? true : false}
          errorMessage={
            errors.firstName && touched.firstName ? errors.firstName : null
          }
        />

        <Input
          type="text"
          variant="bordered"
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched.lastName && errors.lastName ? true : false}
          errorMessage={
            errors.lastName && touched.lastName ? errors.lastName : null
          }
        />
      </div>

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
          variant="bordered"
          name="password"
          type={isPasswordVisible ? "text" : "password"}
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
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>

      <div className="mt-4">
        <Input
          label="Confirm Password"
          variant="bordered"
          name="passwordConfirmation"
          type={isPasswordConfirmationVisible ? "text" : "password"}
          value={values.passwordConfirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={
            touched.passwordConfirmation && errors.passwordConfirmation
              ? true
              : false
          }
          errorMessage={
            errors.passwordConfirmation && touched.passwordConfirmation
              ? errors.passwordConfirmation
              : null
          }
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
        />
      </div>

      <div className="mt-4">
        <Checkbox>I have read and agree to the</Checkbox>{" "}
        <span
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={() => onOpen()}
        >
          Terms of Use
        </span>
        <TermsModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>

      <div className="mt-6">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
