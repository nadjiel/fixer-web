import { createBrowserRouter } from "react-router-dom";
import { DemandsPage } from "./pages/DemandsPage.jsx";
import { DevPage } from "./pages/DevPage";
import { Services } from "./pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Services />,
  },
  {
    path: "/dev",
    element: <DevPage />,
  },
  {
    path: "/demands",
    element: <DemandsPage />,
  },
]);

export default router;
