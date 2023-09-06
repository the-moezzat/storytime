import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./features/registration/Login";
import { Button } from "@/components/ui/button";
import SignUp from "./features/registration/SignUp";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
// import Create from "./features/dashboard/Create";
import Home from "./features/dashboard/Home";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "@/components/ProtectedRoute";
import Generate from "./features/generate/Generate";
import SignedRoute from "./components/signedRoute";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
