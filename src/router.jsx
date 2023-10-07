import { createBrowserRouter } from "react-router-dom";

import { Services } from "./pages/Services.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Services />,
    },
]);

export default router;