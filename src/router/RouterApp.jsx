import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardRoutes } from "./routes/DashboardRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const RouterApp = () => {
  const { status } = useCheckAuth();

  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/panel/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};
