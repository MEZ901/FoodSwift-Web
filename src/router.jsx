import { createBrowserRouter } from "react-router-dom";
import { GuestLayout, RootLayout, UserLayout } from "./layouts";
import { ErrorBoundaryPage, NotFoundPage } from "./pages";
import landingPageRoutes from "./features/LandingPage/routes/landingPageRoutes";
import authRoutes from "./features/Auth/routes/authRoutes";
import customerRoutes from "./features/customer/routes/customerRoutes";
import deliveryRoutes from "./features/delivery/routes/deliveryRoutes";
import { AuthMiddleware, GuestMiddleware } from "./features/Auth/middlewares";
import sharedRoutes from "./shared/routes/sharedRoutes";
import store from "./app/store";

let isLoggedIn = !!store.getState().auth.user;

store.subscribe(() => {
  isLoggedIn = !!store.getState().auth.user;
  // TODO: Rerender the router
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      isLoggedIn
        ? {
            path: "/",
            element: (
              <AuthMiddleware>
                <UserLayout />
              </AuthMiddleware>
            ),
            children: [...sharedRoutes, ...customerRoutes, ...deliveryRoutes],
          }
        : {
            path: "/",
            element: (
              <GuestMiddleware>
                <GuestLayout />
              </GuestMiddleware>
            ),
            children: [...landingPageRoutes, ...authRoutes],
          },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
