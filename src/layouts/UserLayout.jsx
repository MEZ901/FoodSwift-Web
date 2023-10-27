import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
