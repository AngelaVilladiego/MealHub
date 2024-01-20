import { Outlet, Link } from "react-router-dom";
import defaultAvatar from "../../assets/img-profile-default.jpg"

function DashLayout() {

  return (
    <>
      <aside id="nav-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen" role="navigation" aria-label="Main">
        <div class="flex flex-col h-full items-stretch px-3 py-4 overflow-y-auto bg-orange-500 text-white">
          <div id="profile-mini" class="flex flex-col justify-center items-center gap-3 my-5">
            <img 
              src={defaultAvatar} 
              alt="Default Avatar"
              class="rounded-full size-24"
            />
            <p class="font-header text-2xl">Angie</p>
          </div>
          <ul class="grow flex flex-col gap-y-2 text-lg">
            <li ><Link to="/" class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group">link</Link></li>
            <li ><Link to="/" class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group">link</Link></li>
            <li ><Link to="/" class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group">link</Link></li>
            <li ><Link to="/" class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group">link</Link></li>
            <li class="mt-auto"><a href="#" class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group">link</a></li>
          </ul>
          
        </div>
      </aside>
      <Outlet />
    </>
    
  )
}

export default DashLayout