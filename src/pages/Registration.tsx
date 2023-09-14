import Loading from "@/components/Loading";
import { getCurrentUser } from "@/services/apiAuth";
import { Suspense } from "react";
import { useQuery } from "react-query";
import { Outlet, useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();

  const { isLoading } = useQuery(["user"], {
    queryFn: getCurrentUser,
    staleTime: Infinity,
    onSuccess: (data) => {
      if (data) navigate("/app");
    },
    onError: () => {
      console.log("something gone wrong");
    },
  });

  return (
    isLoading || (
      <div className=" container mx-auto grid h-screen  grid-cols-12 gap-4 px-4 max-md:grid-cols-1">
        <div className="col-span-6 grid grid-rows-[auto,1fr] py-4">
          <img src={"/logo-black.svg"} alt="logo" className="h-8" />
          <Suspense fallback={<Loading type="full" size="large" />}>
            <div className=" w- self-center justify-self-center">
              <Outlet />
            </div>
          </Suspense>
        </div>
        <div className="col-span-6 h-screen py-4 max-md:hidden">
          <img
            src="/img.png"
            alt="testimonials"
            className="h-full w-full rounded-[32px] object-cover"
          />
        </div>
      </div>
    )
  );
}
