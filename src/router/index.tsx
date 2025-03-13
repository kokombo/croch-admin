import { Routes, Route } from "react-router";
import {
  Customers,
  Dashboard,
  Disputes,
  Leaderboard,
  MarketingAndPromotion,
  Transactions,
  Vendors,
} from "../pages";
import { MainLayout } from "../layouts";

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/customers" element={<Customers />} />
        <Route
          path="/marketing-and-promotion"
          element={<MarketingAndPromotion />}
        />
        <Route path="/disputes" element={<Disputes />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default Router;
