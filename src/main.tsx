import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router";

// Routes imports
import Home from "@/pages/home";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import SingleLesson from "@/pages/dashboard/single-lesson";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/panel",
    Component: Dashboard,
  },
  {
    path: "/panel/lesson/:lessonId",
    Component: SingleLesson,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
