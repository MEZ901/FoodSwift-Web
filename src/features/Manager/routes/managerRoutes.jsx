import { AuthMiddleware } from "../../Auth/middlewares";
import ManagerProfileContainer from "../containers/ManagerProfileContainer";
import ManagerLayout from "../layouts/ManagerLayout";

const managerRoutes = [
  {
    path: "/manager",
    element: (
      <AuthMiddleware>
        <ManagerLayout />
      </AuthMiddleware>
    ),
    children: [
      {
        path: "profile",
        element: <ManagerProfileContainer />,
      },
    ],
  },
];

export default managerRoutes;
