import { api } from "../../api";

/**
 * Signs up a new user to the API. 
 */
export default async function signup ({
  username,
  email,
  password,
  phone,
  picture
}) {
  const data = { email, password, username, phone, picture };

  const response = await api.post(`/users/`, data);
  const content = await response.data;

  return content;
};
