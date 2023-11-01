import { ResetPasswordContainer, VerifyEmailContainer } from "../containers";
import MailLayout from "../layouts/MailLayout";

const mailRoutes = [
  {
    path: "/mail",
    element: <MailLayout />,
    children: [
      {
        path: "verify-email",
        element: <VerifyEmailContainer />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordContainer />,
      },
    ],
  },
];

export default mailRoutes;
