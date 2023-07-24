import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./features/registration/Login";
import { Button } from "./ui/button";
import SignUp from "./features/registration/SignUp";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
import Create from "./features/dashboard/Create";
import Viewer from "./features/dashboard/Viewer";
import Home from "./features/dashboard/Home";
import { Toaster } from "./ui/toaster";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
// import { AuthProvider } from "./context/AuthProvider";

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

            <Route path="registration" element={<Registration />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="app" element={<AppLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="Home" element={<Home />} />
                <Route path="create" element={<Create />} />
                <Route path="view/:id" element={<Viewer />} />
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
