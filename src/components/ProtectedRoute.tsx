import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getCurrentUser } from "../services/apiAuth";
// import { CircleNotch } from "@phosphor-icons/react";

function ProtectedRoute() {
  const { data, isLoading } = useQuery(["user"], getCurrentUser);

  return (
    <>
      {/* {isLoading && (
        <div className="flex h-screen w-screen items-center justify-center">
          <div className=" animate-spin">
            <CircleNotch size={89} color="#7c8fda" />
          </div>
        </div>
      )} */}

      {data && <Outlet />}

      {!data && !isLoading && <Navigate to={"/registration"} />}
    </>
  );
}

export default ProtectedRoute;
