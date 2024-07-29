import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProjectsPage } from "./pages/Projects";
import { AboutPage } from "./pages/About";
import { NotFound } from "./pages/404";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "*",
      element: <NotFound  />,
    }
  ],
);

export function App() {
  return <RouterProvider router={router} />;
}