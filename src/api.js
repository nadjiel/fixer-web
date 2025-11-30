import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Add a request interceptor to set the Authorization header dynamically,
// replacing the old hardcoded per module load setting.
// https://claude.ai/chat/7387c5b2-f370-491d-8c63-7d52f20fa572
api.interceptors.request.use(
  (config) => {
    const access = Cookies.get("access");

    if(access) {
      config.headers.Authorization = `Bearer ${access}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
