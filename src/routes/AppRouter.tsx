import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "@/pages/Landing/Landing";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Dashboard from "@/pages/Dashboard/Dashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
