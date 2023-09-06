import { Outlet } from "react-router-dom";
import DashboardHeader from "@/features/dashboard/DashboardHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { styled } from "styled-components";

const Main = styled(ScrollArea)`
  height: calc(100vh - 64px);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #eee;
  padding: 16px;
  overflow: auto;
`;

function AppLayout() {
  return (
    <div className="container">
      <DashboardHeader />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
