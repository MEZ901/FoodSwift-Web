import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorBoundary from "./views/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
