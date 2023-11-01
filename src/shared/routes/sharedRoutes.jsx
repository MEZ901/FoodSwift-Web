import store from "../../app/store";
import CustomerProfileContainer from "../../features/customer/containers/CustomerProfileContainer";
import DeliveryProfileContainer from "../../features/delivery/containers/DeliveryProfileContainer";
import ManagerProfileContainer from "../../features/manager/containers/ManagerProfileContainer";

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
