import { Outlet } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";

function DashLayout() {

  return (
    <>
      <SidebarNav/>
      <Outlet />
    </>
    
  )
}

export default DashLayout