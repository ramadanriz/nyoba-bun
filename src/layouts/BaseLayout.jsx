import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const BaseLayout = () => {
  return (
    <>
      <Copyright />
      <Outlet />
      <Navbar />
    </>
  );
};

export default BaseLayout;
