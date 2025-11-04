import axios from "axios";
import Cookies from "js-cookie";

const access = Cookies.get("access");

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${access}`,
  },
});
