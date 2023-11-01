import store from "../../app/store";
import DeliveryProfileContainer from "../../features/Delivery/containers/DeliveryProfileContainer";
import ManagerProfileContainer from "../../features/Manager/containers/ManagerProfileContainer";
import CustomerProfileContainer from "../../features/Customer/containers/CustomerProfileContainer";

const userRoles = store.getState().auth.user?.roles;

const sharedRoutes = [
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/profile",
    element: (() => {
      switch (true) {
        case userRoles?.includes("manager"):
          return <ManagerProfileContainer />;
        case userRoles?.includes("delivery"):
          return <DeliveryProfileContainer />;
        default:
          return <CustomerProfileContainer />;
      }
    })(),
  },
];

export default sharedRoutes;
