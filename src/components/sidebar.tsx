import { NavLink, useLocation } from "react-router";
import { ASIDE_DATA } from "../constants/aside";
import { SettingsIcon, SignOutIcon } from "../constants/icons";
import { cn } from "../lib/utils";
import { useState } from "react";

const Sidebar = () => {
  const [isHoveredPath, setIsHoveredPath] = useState(false);

  const location = useLocation();

  return (
    <aside className="p-8 flex flex-col justify-between h-full fixed left-0 top-0">
      <div>
        <h1 className="font-extrabold text-2xl">Croch</h1>

        <div className="space-y-6 mt-12">
          {ASIDE_DATA.map((data, index) => {
            return (
              <div key={index.toString()} className="space-y-2">
                {data.group && (
                  <h2 className="uppercase font-medium text-black/70">
                    {data.group}
                  </h2>
                )}
                <ul className="pl-4">
                  {data.items.map((link, index) => {
                    return (
                      <li key={index.toString()}>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            cn(
                              isActive
                                ? "bg-black rounded-xl text-white"
                                : "text-black/70 hover:bg-black/70 hover:rounded-xl hover:text-white",
                              "flex items-center gap-4 p-3  font-medium"
                            )
                          }
                          onMouseEnter={() => setIsHoveredPath(true)}
                          onMouseLeave={() => setIsHoveredPath(false)}
                        >
                          <link.icon
                            isActive={
                              location.pathname === link.path || isHoveredPath
                            }
                          />
                          <span>{link.title}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <span className="flex items-center gap-4 p-3 text-black/70 hover:bg-black hover:rounded-xl hover:text-white">
          <SettingsIcon />
          <NavLink to="/settings" className="font-medium">
            Settings
          </NavLink>
        </span>

        <span className="flex items-center gap-4 p-3 text-black/70">
          <SignOutIcon />
          <button className="font-medium">Sign Out</button>
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
