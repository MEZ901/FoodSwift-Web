import { createBrowserRouter } from "react-router-dom";
import { GuestLayout, RootLayout, UserLayout } from "./layouts";
import { ErrorBoundaryPage, NotFoundPage } from "./pages";
import landingPageRoutes from "./features/LandingPage/routes/landingPageRoutes";
import authRoutes from "./features/Auth/routes/authRoutes";
import customerRoutes from "./features/Customer/routes/customerRoutes";
import deliveryRoutes from "./features/Delivery/routes/deliveryRoutes";
import managerRoutes from "./features/Manager/routes/managerRoutes";
import { AuthMiddleware, GuestMiddleware } from "./features/Auth/middlewares";
import sharedRoutes from "./shared/routes/sharedRoutes";
import mailRoutes from "./features/Mail/routes/mailRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        path: "/",
        element: (
          <GuestMiddleware>
            <GuestLayout />
          </GuestMiddleware>
        ),
        children: [...landingPageRoutes, ...authRoutes],
      },
      {
        path: "/",
        element: (
          <AuthMiddleware>
            <UserLayout />
          </AuthMiddleware>
        ),
        children: [
          ...sharedRoutes,
          ...customerRoutes,
          ...deliveryRoutes,
          ...managerRoutes,
        ],
      },
      ...mailRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
