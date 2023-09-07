import { Suspense, lazy } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "@/components/ui/toaster";

import ProtectedRoute from "@/components/ProtectedRoute";
import SignedRoute from "./components/signedRoute";
import Loading from "./components/Loading";

const Registration = lazy(() => import("@/pages/Registration"));
const Login = lazy(() => import("@/features/registration/Login"));
const SignUp = lazy(() => import("@/features/registration/SignUp"));
const AppLayout = lazy(() => import("@/pages/AppLayout"));
const Dashboard = lazy(() => import("@/features/dashboard/Dashboard"));
const Home = lazy(() => import("@/features/dashboard/Home"));
const Generate = lazy(() => import("@/features/generate/Generate"));

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<Loading type="screen" size="large" />}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Button>
                    <Link to={"registration/login"}>Login</Link>
                  </Button>
                }
              />
              <Route element={<SignedRoute />}>
                <Route path="registration" element={<Registration />}>
                  <Route index element={<Navigate replace to="login" />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                </Route>
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="app" element={<AppLayout />}>
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="home" element={<Home />} />
                  <Route path="create" element={<Generate />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
