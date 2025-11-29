import Cookie from "js-cookie";

/**
 * Signout implementation that makes the browser
 * "forget" the current user by erasing its cookies,
 * essentially signing them out in the frontend.
 */
export default function signout() {
  Cookie.remove("access");
  Cookie.remove("refresh");
}
