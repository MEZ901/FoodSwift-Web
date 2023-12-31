import { AuthMiddleware } from "../../Auth/middlewares";
import CustomerProfileContainer from "../containers/CustomerProfileContainer";
import CustomerLayout from "../layouts/CustomerLayout";

const customerRoutes = [
  {
    path: "/customer",
    element: (
      <AuthMiddleware>
        <CustomerLayout />
      </AuthMiddleware>
    ),
    children: [
      {
        path: "/customer",
        element: <h1>Customer Home</h1>,
      },
      {
        path: "profile",
        element: <CustomerProfileContainer />,
      },
    ],
  },
];

export default customerRoutes;
