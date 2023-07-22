import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import SignUp from "./features/registration/SignUp";
import Login from "./features/registration/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="registration" element={<Registration />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
