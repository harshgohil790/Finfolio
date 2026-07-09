import { NavLink } from "react-router-dom";

import {
  MdDashboard,
  MdBusiness,
  MdAccountBalanceWallet,
  MdShowChart,
  MdBookmark,
} from "react-icons/md";

const menu = [
  {
    title: "Dashboard",
    path: "/",
    icon: MdDashboard,
  },
  {
    title: "Companies",
    path: "/companies",
    icon: MdBusiness,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: MdAccountBalanceWallet,
  },
  {
    title: "Trading",
    path: "/trading",
    icon: MdShowChart,
  },
  {
    title: "Watchlist",
    path: "/watchlist",
    icon: MdBookmark,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-56 bg-slate-900 text-white flex flex-col">

      <div className="px-6 py-7 border-b border-slate-700">

        <h1 className="text-3xl font-bold tracking-wide text-blue-400">

          FinFolio

        </h1>

      </div>

      <nav className="flex-1 mt-5">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 mx-3 mb-2 px-4 py-3 rounded-lg transition-all duration-300

                ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={23} />

              <span className="font-medium">

                {item.title}

              </span>

            </NavLink>
          );
        })}

      </nav>

      <div className="border-t border-slate-700 p-5 text-sm text-gray-400">

        FinFolio v1.0

      </div>

    </aside>
  );
}