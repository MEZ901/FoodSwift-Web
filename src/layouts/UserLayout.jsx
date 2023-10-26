import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserLayout;
