import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProjectsPage } from "./pages/Projects";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";

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
    path: "/contact",
    element: <ContactPage />,
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}