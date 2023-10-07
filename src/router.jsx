import { createBrowserRouter } from "react-router-dom";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { ServiceCreatePage } from "./service/create/ServiceCreatePage";
import { ServicesPage } from "./service/list/ServicesPage";
import { AccountPage } from "./account/AccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ServicesPage />,
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
    element: <ServicesPage />,
  },
  {
    path: "/services/create",
    element: <ServiceCreatePage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
]);

export default router;
