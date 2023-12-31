import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "@/features/dashboard/DashboardHeader";
import { styled } from "styled-components";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { useQuery } from "react-query";
import { getCurrentUser } from "@/services/apiAuth";

const Main = styled.div`
  height: calc(100vh - 64px);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #f8f9fa;
  padding: 16px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    gap: 8px;
    padding: 8px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    height: calc(100vh - 56px);
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 8px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    height: calc(100vh - 48px);
  }
  @media (max-width: 650px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: calc(100vh - 40px);
  }
`;

function AppLayout() {
  const navigate = useNavigate();

  const { isLoading } = useQuery(["user"], {
    queryFn: getCurrentUser,
    staleTime: Infinity,
    onSuccess: (data) => {
      console.log(data);
      if (!data) navigate("/registration");
    },
    onError: () => {
      navigate("/registration");
    },
  });

  return (
    isLoading || (
      <div className="mx-auto max-w-[1440px] px-4 max-lg:px-2 max-sm:px-0">
        <DashboardHeader />
        <Main>
          <Suspense
            fallback={
              <Loading size="large" type="full" className={"col-span-full"} />
            }
          >
            <Outlet />
          </Suspense>
        </Main>
      </div>
    )
  );
}

export default AppLayout;
