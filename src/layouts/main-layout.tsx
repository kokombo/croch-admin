import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";
import Navigationbar from "../components/navigationbar";

const MainLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full">
        <Navigationbar />
        <section className="p-2 bg-gray-50 min-h-screen">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default MainLayout;
