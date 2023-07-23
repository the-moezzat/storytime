import { Outlet } from "react-router-dom";
import DashboardHeader from "../features/dashboard/DashboardHeader";

function AppLayout() {
  return (
    <div className="container grid h-screen grid-rows-[auto,1fr]">
      <DashboardHeader />
      <div className="rounded-t-3xl bg-gray-0 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
