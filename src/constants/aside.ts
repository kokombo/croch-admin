import {
  CustomersIcon,
  DashboardIcon,
  DisputesIcon,
  FAQsIcon,
  LeaderboardIcon,
  MarketingAndPromotionsIcon,
  TransactionsIcon,
  VendorsIcon,
} from "./icons";

export const ASIDE_DATA = [
  {
    group: "",
    items: [
      { title: "Dashboard", path: "/dashboard", icon: DashboardIcon },
      { title: "Leaderboard", path: "/leaderboard", icon: LeaderboardIcon },
    ],
  },
  {
    group: "Users",
    items: [
      { title: "Vendors", path: "/vendors", icon: VendorsIcon },
      { title: "Customers", path: "/customers", icon: CustomersIcon },
    ],
  },

  {
    group: "Center",
    items: [
      {
        title: "Mkt. & promotion",
        path: "/marketing-and-promotion",
        icon: MarketingAndPromotionsIcon,
      },
      { title: "Disputes", path: "/disputes", icon: DisputesIcon },
      { title: "Transactions", path: "/transactions", icon: TransactionsIcon },
      { title: "FAQs", path: "/faqs", icon: FAQsIcon },
    ],
  },
];
