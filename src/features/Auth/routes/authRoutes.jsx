import { LoginContainer, RegisterContainer } from "../containers";
import AuthLayout from "../layouts/AuthLayout";

const authRoutes = [
  {
    path: "/auth",
    element: <AuthLayout />,
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
];

export default authRoutes;
