import { Outlet } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import "./DashLayout.css";

function DashLayout() {
  return (
    <>
      <SidebarNav />
      <div
        id="content-wrapper"
        className="ml-56 left-56 min-h-screen flex flex-col items-center"
      >
        <Outlet />
      </div>
    </>
  );
}

export default DashLayout;
