import { createBrowserRouter } from "react-router-dom";
import { AccountPage } from "./account/AccountPage";
import { SignInPage } from "./auth/SignInPage";
import { SignUpPage } from "./auth/SignUpPage.jsx";
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
import { ServiceEditPage } from "./service/edit/ServiceEditPage";
import { authLoader, devLoader } from "./router/lib";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ServiceCategoriesPage />,
      loader: authLoader,
    },
    {
      path: "/dev",
      element: <DevPage />,
      loader: devLoader,
    },
    {
      path: "/demands",
      element: <DemandsPage />,
      loader: authLoader,
    },
    {
      path: "/demands/:id/edit",
      element: <EditDemandPage />,
      loader: authLoader,
    },
    {
      path: "/demands/:id",
      element: <DemandPage />,
      loader: authLoader,
    },
    {
      path: "/demands/create",
      element: <CreateDemandPage />,
      loader: authLoader,
    },
    {
      path: "/demands/code/:code",
      element: <DemandPage />,
      loader: authLoader,
    },
    {
      path: "/services",
      element: <ServiceCategoriesPage />,
      loader: authLoader,
    },
    {
      path: "/services/category/:category",
      element: <ServicesPage />,
      loader: authLoader,
    },
    {
      path: "/services/category/:category/:id",
      element: <ServicePage />,
      loader: authLoader,
    },
    {
      path: "/services/category/:category/create",
      element: <ServiceCreatePage />,
      loader: authLoader,
    },
    {
      path: "/services/:id/edit",
      element: <ServiceEditPage />,
      loader: authLoader,
    },
    {
      path: "/services/:id",
      element: <ServicePage />,
      loader: authLoader,
    },
    {
      path: "/account",
      element: <AccountPage />,
      loader: authLoader,
    },
    {
      path: "/account/edit",
      element: <EditAccountPage />,
      loader: authLoader,
    },
    {
      path: "/signIn",
      element: <SignInPage />,
    },
    {
      path: "/signUp",
      element: <SignUpPage />,
    },
    {
      path: "/accountDemands",
      element: <AccountDemandsPage />,
      loader: authLoader,
    },
    {
      path: "/accountLikes",
      element: <AccountLikesPage />,
      loader: authLoader,
    },
  ], {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export default router;
