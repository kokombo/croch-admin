import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";
import Navigationbar from "../components/navigationbar";

const MainLayout = () => {
  return (
    <main className="flex">
      <div className="w-72">
        <Sidebar />
      </div>

      <div className="w-full">
        <Navigationbar />
        <section className="px-2 bg-gray-50 min-h-screen mt-24">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default MainLayout;
