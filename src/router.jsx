import { createBrowserRouter } from "react-router-dom";
import { RootLayout, UserLayout } from "./layouts";
import { ErrorBoundaryPage, NotFoundPage } from "./pages";
import landingPageRoutes from "./features/LandingPage/routes/landingPageRoutes";
import authRoutes from "./features/Auth/routes/authRoutes";
import customerRoutes from "./features/customer/routes/customerRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [...landingPageRoutes, ...authRoutes, ...customerRoutes],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
