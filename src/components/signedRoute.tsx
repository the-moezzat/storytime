import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getCurrentUser } from "../services/apiAuth";
// import { CircleNotch } from "@phosphor-icons/react";

function SignedRoute() {
  const { data } = useQuery(["user"], getCurrentUser);

  // if (isLoading)
  //   return (
  //     <div className="flex h-screen w-screen items-center justify-center">
  //       <div className=" animate-spin">
  //         <CircleNotch size={89} color="#7c8fda" />
  //       </div>
  //     </div>
  //   );

  if (data) return <Navigate to={"/app/dashboard"} />;
  return <Outlet />;
}

export default SignedRoute;
