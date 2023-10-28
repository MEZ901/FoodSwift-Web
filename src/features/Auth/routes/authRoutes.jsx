import { LoginContainer, RegisterContainer } from "../containers";

const authRoutes = [
  {
    path: "/auth/login",
    element: <LoginContainer />,
  },
  {
    path: "/auth/register",
    element: <RegisterContainer />,
  },
];

export default authRoutes;
