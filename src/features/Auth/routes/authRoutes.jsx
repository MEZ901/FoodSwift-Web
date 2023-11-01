import {
  ForgetPasswordContainer,
  LoginContainer,
  RegisterContainer,
} from "../containers";
import AuthLayout from "../layouts/AuthLayout";
import { GuestMiddleware } from "../middlewares";

const authRoutes = [
  {
    path: "/auth",
    element: (
      <GuestMiddleware>
        <AuthLayout />
      </GuestMiddleware>
    ),
    children: [
      {
        path: "/auth",
        element: <LoginContainer />,
      },
      {
        path: "login",
        element: <LoginContainer />,
      },
      {
        path: "register",
        element: <RegisterContainer />,
      },
    ],
  },
  {
    path: "forget-password",
    element: <ForgetPasswordContainer />,
  },
];

export default authRoutes;
