import DeliveryProfileContainer from "../containers/DeliveryProfileContainer";
import DeliveryLayout from "../layouts/DeliveryLayout";

const deliveryRoutes = [
  {
    path: "/delivery",
    element: <DeliveryLayout />,
    children: [
      {
        path: "/delivery",
        element: <h1>delivery Home</h1>,
      },
      {
        path: "profile",
        element: <DeliveryProfileContainer />,
      },
    ],
  },
];

export default deliveryRoutes;
