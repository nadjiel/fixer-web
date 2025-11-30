import { api } from "../../api";

/**
 * Uses the {@link api} to sign in a user with
 * {@link username `username`} and {@link password `password`}.
 */
export default async function signin({ username, password }) {
  const data = { username, password };

  const response = await api.post(`/login/`, data);
  
  return response.data;
};
