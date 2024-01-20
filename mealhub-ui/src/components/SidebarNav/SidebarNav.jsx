import { Link } from "react-router-dom";
import defaultAvatar from "../../assets/img-profile-default.jpg";
import {
  Squares2X2Icon,
  ListBulletIcon,
  StarIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

function SidebarNav() {
  return (
    <aside
      id="nav-sidebar"
      class="fixed top-0 left-0 z-40 w-56 h-screen"
      role="navigation"
      aria-label="Main"
    >
      <div class="flex flex-col h-full items-stretch px-3 py-4 overflow-y-auto bg-orange-500 text-white">
        <span class="font-brand text-4xl pt-4 hover:cursor-default text-center">
          MealHub
        </span>
        <div
          id="profile-mini"
          class="p-2 self-center aspect-square flex flex-col justify-center items-center gap-3 my-5 rounded-lg hover:cursor-pointer group"
        >
          <img
            src={defaultAvatar}
            alt="Default Avatar"
            class="rounded-full size-24"
          />
          <p class="font-header text-2xl">Angie</p>
        </div>
        <ul class="grow flex flex-col gap-y-2 text-lg">
          <li>
            <Link
              to="/"
              class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <Squares2X2Icon class="size-8 rounded-lg  group-hover:text-gray-900" />
              <span class="ms-3 pt-1">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/shoppingList"
              class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <ListBulletIcon class="size-8 rounded-lg  group-hover:text-gray-900" />
              <span class="ms-3 pt-1">Shopping List</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <StarIcon class="size-8 rounded-lg  group-hover:text-gray-900" />
              <span class="ms-3 pt-1">Saved Meals</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <UserIcon class="size-8 rounded-lg  group-hover:text-gray-900" />
              <span class="ms-3 pt-1">Profile</span>
            </Link>
          </li>
          <li class="mt-auto">
            <Link
              to="/"
              class="flex items-center p-2 font-bold rounded-lg hover:bg-orange-200 hover:text-gray-900 group"
            >
              <ArrowRightStartOnRectangleIcon class="size-8 rounded-lg  group-hover:text-gray-900" />
              <span class="ms-3 pt-1">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SidebarNav;
