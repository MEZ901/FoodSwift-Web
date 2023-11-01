import store from "../../app/store";
import DeliveryProfileContainer from "../../features/Delivery/containers/DeliveryProfileContainer";
import ManagerProfileContainer from "../../features/Manager/containers/ManagerProfileContainer";
import CustomerProfileContainer from "../../features/Customer/containers/CustomerProfileContainer";
import { AuthMiddleware } from "../../features/Auth/middlewares";

const sharedRoutes = [
  {
    path: "/profile",
    element: (() => {
      const userRoles = store.getState().auth.user?.roles;
      switch (true) {
        case userRoles?.includes("manager"):
          return (
            <AuthMiddleware>
              <ManagerProfileContainer />
            </AuthMiddleware>
          );
        case userRoles?.includes("delivery"):
          return (
            <AuthMiddleware>
              <DeliveryProfileContainer />
            </AuthMiddleware>
          );
        default:
          return (
            <AuthMiddleware>
              <CustomerProfileContainer />
            </AuthMiddleware>
          );
      }
    })(),
  },
];

export default sharedRoutes;
