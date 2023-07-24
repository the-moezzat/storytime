import { Outlet } from "react-router-dom";
import DashboardHeader from "../features/dashboard/DashboardHeader";
import { ScrollArea } from "../ui/scroll-area";

function AppLayout() {
  return (
    <div className="container flex h-screen flex-col">
      <DashboardHeader />
      <ScrollArea className="h-full rounded-t-3xl bg-gray-0 py-4">
        <div className="px-6">
          <Outlet />
        </div>
      </ScrollArea>
    </div>
  );
}

export default AppLayout;
