import { api } from "../../api";

/**
 * Uses the {@link api} to fetch data about the current user.
 */
export default async function loadSelf() {
  const response = await api.get(`/users/me/`);
  
  return response.data;
};
