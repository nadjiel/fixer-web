import { redirect, createBrowserRouter } from "react-router-dom";

/**
 * Factory that creates a loader for use with
 * {@link createBrowserRouter} routes.
 * @returns a loader that redirects to the {@link route `route`} when
 * {@link predicate `predicate`} returns `true`.
 */
export default function redirectorLoader(route, predicate) {
  return async () => {
    if (predicate?.() ?? predicate) {
      throw redirect(route);
    }
    
    return null;
  }
}
