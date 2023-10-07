import { createBrowserRouter } from "react-router-dom";
import { Services } from "./pages/Services.jsx";
import { DevPage } from "./pages/DevPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Services />,
  },
  {
    path: "/dev",
    element: <DevPage />,
  },
]);

export default router;
