import { createBrowserRouter } from "react-router-dom";
import { AccountPage } from "./account/AccountPage";
import { SignInPage } from "./auth/SignInPage";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { ServiceCreatePage } from "./service/create/ServiceCreatePage";
import { ServicesPage } from "./service/list/ServicesPage";
import { CreateDemandPage } from "./demand/CreateDemandPage";
import { ServicesAllPage } from "./service/listServices/ServicesAllPage";
import { ServicePage } from "./service/ServicePage";
import { AccountDemandsPage } from "./account/AccountDemandsPage";
import { AccountLikesPage } from "./account/AccountLikesPage";
import { DemandPage } from "./demand/DemandPage";

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
    path: "/demands/:id",
    element: <DemandPage />,
  },
  {
    path: "/demand/create",
    element: <CreateDemandPage />,
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
  {
    path: "/accountDemands",
    element: <AccountDemandsPage />,
  },
  {
    path: "/accountLikes",
    element: <AccountLikesPage />,
  },
]);

export default router;
