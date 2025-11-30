import { redirect, createBrowserRouter } from "react-router-dom";

/**
 * Loader for use with {@link createBrowserRouter} routes
 * that redirects users to the home page if the site isn't
 * in `development` mode.
 */
export default async function authLoader() {
  if (!import.meta.env === "development") {
    throw redirect("/");
  }
  
  return null;
}
