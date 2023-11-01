import ManagerProfileContainer from "../containers/ManagerProfileContainer";
import ManagerLayout from "../layouts/ManagerLayout";

const managerRoutes = [
  {
    path: "/manager",
    element: <ManagerLayout />,
    children: [
      {
        path: "profile",
        element: <ManagerProfileContainer />,
      },
    ],
  },
];

export default managerRoutes;
