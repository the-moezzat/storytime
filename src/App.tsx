import { Suspense, lazy } from "react";
// import { ReactQueryDevtools } from "react-query/types/devtools/devtools";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Loading from "./components/Loading";

const Registration = lazy(() => import("@/pages/Registration"));
const Login = lazy(() => import("@/features/registration/Login"));
const SignUp = lazy(() => import("@/features/registration/SignUp"));
const AppLayout = lazy(() => import("@/pages/AppLayout"));
const Dashboard = lazy(() => import("@/features/dashboard/Dashboard"));
const Community = lazy(() => import("@/features/community"));
const Generate = lazy(() => import("@/features/generate/Generate"));
const LandingPage = lazy(() => import("@/pages/landingPage"));

function App() {
  // const { data } = useQuery(["user"], getCurrentUser, {
  //   staleTime: Infinity,
  // });

  return (
    <>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Suspense fallback={<Loading type="screen" size="large" />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="registration" element={<Registration />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Dashboard />} />
              <Route path="community" element={<Community />} />
              <Route path="create" element={<Generate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
