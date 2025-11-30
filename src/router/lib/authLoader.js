import { redirect, createBrowserRouter } from "react-router-dom";
import { isAuthenticated } from "../../auth/lib";

/**
 * Loader for use with {@link createBrowserRouter} routes
 * that redirects users to the `signin` page when they aren't
 * signed in.
 */
export default async function authLoader() {
  if (!isAuthenticated()) {
    throw redirect("/signin");
  }
  
  return null;
}
