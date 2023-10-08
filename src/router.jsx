import { createBrowserRouter } from "react-router-dom";
import { AccountPage } from "./account/AccountPage";
import { SignInPage } from "./auth/SignInPage";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { ServiceCreatePage } from "./service/create/ServiceCreatePage";
import { ServicesPage } from "./service/list/ServicesPage";
import { EditDemandPage } from "./demand/EditDemandPage";
import { ServiceCategoriesPage } from "./service/listServices/ServiceCategoriesPage";
import { ServicePage } from "./service/ServicePage";
import { AccountDemandsPage } from "./account/AccountDemandsPage";
import { AccountLikesPage } from "./account/AccountLikesPage";
import { DemandPage } from "./demand/DemandPage";
import { EditAccountPage } from "./account/EditAccountPage";
import { CreateDemandPage } from "./demand/CreateDemandPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ServiceCategoriesPage />,
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
    path: "/demands/:id/edit",
    element: <EditDemandPage />,
  },
  {
    path: "/demands/create",
    element: <CreateDemandPage />,
  },
  {
    path: "/demands/:id",
    element: <DemandPage />,
  },
  {
    path: "/services",
    element: <ServiceCategoriesPage />,
  },
  {
    path: "/services/category/:category",
    element: <ServicesPage />,
  },
  {
    path: "/services/category/:category/:id",
    element: <ServicePage />,
  },
  {
    path: "/services/category/:category/create",
    element: <ServiceCreatePage />,
  },
  {
    path: "/services/:id",
    element: <ServicePage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/account/edit",
    element: <EditAccountPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
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
