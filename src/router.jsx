import { createBrowserRouter } from "react-router-dom";
import { AccountPage } from "./account/AccountPage";
import { SignInPage } from "./auth/SignInPage";
import { DemandsPage } from "./demand/DemandsPage";
import { DevPage } from "./dev/DevPage";
import { ServiceCreatePage } from "./service/create/ServiceCreatePage";
import { ServicesPage } from "./service/list/ServicesPage";
import { CreateDemandPage } from "./demand/CreateDemandPage";
import { ServiceCategoriesPage } from "./service/listServices/ServiceCategoriesPage";
import { ServicePage } from "./service/ServicePage";
import { AccountDemandsPage } from "./account/AccountDemandsPage";
import { AccountLikesPage } from "./account/AccountLikesPage";
import { EditAccountPage } from "./account/EditAccountPage";

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
    path: "/demand/create",
    element: <CreateDemandPage />,
  },
  {
    path: "/services",
    element: <ServiceCategoriesPage />,
  },
  {
    path: "/services/:category",
    element: <ServicesPage />,
  },
  {
    path: "/services/:category/:id",
    element: <ServicePage />,
  },
  {
    path: "/services/:category/create",
    element: <ServiceCreatePage />,
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
