import { createBrowserRouter } from "react-router-dom";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { Services } from "./service/ServicesPage.jsx";
import { ServiceCreatePage } from "./service/create/ServiceCreatePage";

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
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/create",
    element: <ServiceCreatePage />,
  },
]);

export default router;
