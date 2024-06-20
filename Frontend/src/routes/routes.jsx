import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../pages/RegisterPage";
import { Login } from "../pages/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";

const MyRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default MyRouter;
