import Spinner from "@/components/ui/Spinner/Spinner";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Landing = React.lazy(() => import("@/pages/Landing/Landing"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard/Dashboard"));
const Login = React.lazy(() => import("@/pages/Login/Login"));
const Register = React.lazy(() => import("@/pages/Register/Register"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spinner text={"BuildTogether"} variant="wave" fullScreen />
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
