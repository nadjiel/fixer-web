import { createBrowserRouter } from "react-router-dom";
import { AccountPage } from "./account/AccountPage";
import { SignInPage } from "./auth/SignInPage";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { ServiceCreatePage } from "./service/create/ServiceCreatePage";
import { ServicesPage } from "./service/list/ServicesPage";
import { ServicesAllPage } from "./service/listServices/ServicesAllPage"
import { CreateDemandPage } from "./demand/CreateDemandPage";
import { ServicePage } from "./service/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ServicesAllPage />,
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
    path: "/demand/create",
    element: <CreateDemandPage />
  },
  {
    path: "/services",
    element: <ServicesAllPage />,
  },
  {
    path: "/services/:service",
    element: <ServicesPage />,
  },
  {
    path: "/services/:service/:id",
    element: <ServicePage />,
  },
  {
    path: "/services/:service/create",
    element: <ServiceCreatePage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
]);

export default router;
