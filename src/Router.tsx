import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, NewsPage, ProfilePage } from "./pages";

const AppRoutes: React.FC = () => (
  <>
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path={"test-task-AlterEGO/"} element={<HomePage />} />
      <Route path={"test-task-AlterEGO/news"} element={<NewsPage />} />
      <Route path={"test-task-AlterEGO/profile"} element={<ProfilePage />} />
      <Route path={"test-task-AlterEGO/sign-in"} element={<LoginPage />} />
    </Routes>
  </>
);

export default AppRoutes;
