import { NavLink } from "react-router";
import { ASIDE_DATA } from "../constants/aside";

const Sidebar = () => {
  return (
    <aside className="p-8">
      <div className="space-y-6">
        {ASIDE_DATA.map((data, index) => {
          return (
            <div key={index.toString()} className="space-y-2">
              {data.group && <h2>{data.group}</h2>}
              <ul>
                {data.items.map((link, index) => {
                  return (
                    <li
                      key={index.toString()}
                      className="flex items-center gap-4 py-3"
                    >
                      <link.icon />
                      <NavLink
                        to={link.path}
                        className="font-medium text-black/70"
                      >
                        {link.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
