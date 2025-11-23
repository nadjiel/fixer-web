import Cookies from "js-cookie";

/**
 * @returns a `boolean` indicating if the user is authenticated
 */
export default function isAuthenticated() {
  const token = Cookies.get("access");

  return !!token;
}
