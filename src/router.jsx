import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { ErrorBoundary } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
