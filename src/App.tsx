import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./features/registration/Login";
// import SignUp from "./features/registration/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="registration" element={<Registration />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
