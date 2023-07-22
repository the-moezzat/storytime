import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./features/registration/Login";
import { Button } from "./ui/button";
import SignUp from "./features/registration/SignUp";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./features/dashboard/Dashboard";
import Create from "./features/dashboard/Create";
import Viewer from "./features/dashboard/Viewer";

function App() {
  return (
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
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:id" element={<Viewer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
