import { createBrowserRouter } from "react-router-dom";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { Services } from "./service/ServicesPage.jsx";

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
