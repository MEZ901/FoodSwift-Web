import { AuthMiddleware } from "../../Auth/middlewares";

const customerRoutes = [
  {
    path: "/customer",
    element: (
      <AuthMiddleware>
        <h1>Customer</h1>
      </AuthMiddleware>
    ),
  },
];

export default customerRoutes;
