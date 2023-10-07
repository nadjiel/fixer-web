import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="717882556861-bdjcihh9ih7hgguvrf2pdh1o7i6hoc6k.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

export default App;
