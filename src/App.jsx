import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./auth/contexts";

function App() {
  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId="717882556861-bdjcihh9ih7hgguvrf2pdh1o7i6hoc6k.apps.googleusertext.com">
        <AuthProvider autoload={false}>
          <RouterProvider router={router} />
        </AuthProvider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
}

export default App;
