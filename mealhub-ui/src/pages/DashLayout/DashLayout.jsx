import { Outlet } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import "./DashLayout.css";

function DashLayout() {
  return (
    <>
      <SidebarNav />
      <div
        id="content-wrapper"
        class="ml-56 left-56 min-h-screen flex flex-col items-center p-8 pt-24"
      >
        <div id="content-wrapper-inner" class="">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashLayout;
