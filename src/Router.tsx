import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NewsPage, ProfilePage } from "./pages";

const AppRoutes: React.FC = () => (
  <>
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/news"} element={<NewsPage />} />
      <Route path={"/profile"} element={<ProfilePage />} />
      <Route path={"/login"} element={<LoginPage />} />
    </Routes>
  </>
);

export default AppRoutes;
