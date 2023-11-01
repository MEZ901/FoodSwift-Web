import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
