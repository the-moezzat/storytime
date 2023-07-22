import { Outlet } from "react-router-dom";
import DashboardHeader from "../features/dashboard/DashboardHeader";

function AppLayout() {
  return (
    <div className="container">
      <DashboardHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
