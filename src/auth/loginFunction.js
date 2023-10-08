import { api } from "../api";

export const login = async ({ username, password }) => {
  const data = { username, password };
  const response = await api.post(`/login/`, data);
  return response.data;
};
