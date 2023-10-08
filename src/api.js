import axios from "axios";
import Cookies from "js-cookie";

const access = Cookies.get("access");

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    Authorization: `Bearer ${access}`,
  },
});
