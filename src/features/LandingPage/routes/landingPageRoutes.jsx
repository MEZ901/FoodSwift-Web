import { GuestMiddleware } from "../../Auth/middlewares";
import LandingPageContainer from "../containers/LandingPageContainer";

const landingPageRoutes = [
  {
    path: "/",
    element: (
      <GuestMiddleware>
        <LandingPageContainer />
      </GuestMiddleware>
    ),
  },
];

export default landingPageRoutes;
