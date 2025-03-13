import { Routes, Route } from "react-router";
import { Dashboard } from "../pages";
import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
