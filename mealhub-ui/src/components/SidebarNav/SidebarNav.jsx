import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/img-profile-default.jpg";
import {
  Squares2X2Icon,
  ListBulletIcon,
  StarIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function SidebarNav() {
  return (
    <aside
      id="nav-sidebar"
      className="fixed top-0 left-0 z-40 w-56 h-screen"
      role="navigation"
      aria-label="Main"
    >
      <div className="flex flex-col h-full items-stretch px-3 py-4 overflow-y-auto bg-orange-500 text-white">
        <span className="font-brand text-4xl pt-4 hover:cursor-default text-center">
          MealHub
        </span>
        <div
          id="profile-mini"
          className="p-2 self-center aspect-square flex flex-col justify-center items-center gap-3 my-5 rounded-lg hover:cursor-pointer group"
        >
          <img
            src={defaultAvatar}
            alt="Default Avatar"
            className="rounded-full size-24"
          />
          <p className="font-header text-2xl">Angie</p>
        </div>
        <ul className="grow flex flex-col gap-y-2 text-lg">
          <li>
            <Link
              to="/dash/"
              className="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <Squares2X2Icon className="size-8 rounded-lg  group-hover:text-gray-900" />
              <span className="ms-3 pt-1">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dash/shoppingList"
              className="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <ListBulletIcon className="size-8 rounded-lg  group-hover:text-gray-900" />
              <span className="ms-3 pt-1">Shopping List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dash/favourites"
              className="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <StarIcon className="size-8 rounded-lg  group-hover:text-gray-900" />
              <span className="ms-3 pt-1">Saved Meals</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dash/preferences"
              className="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <HeartIcon className="size-8 rounded-lg  group-hover:text-gray-900" />
              <span className="ms-3 pt-1">Preferences</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <UserIcon className="size-8 rounded-lg  group-hover:text-gray-900" />
              <span className="ms-3 pt-1">Profile</span>
            </Link>
          </li>
          <li className="mt-auto">
            <Link
              to="/signup"
              className="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <ArrowRightStartOnRectangleIcon className="size-8 rounded-lg  group-hover:text-gray-900" />
              <span className="ms-3 pt-1">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SidebarNav;
