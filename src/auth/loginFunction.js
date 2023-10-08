import { api } from "../api";

export const login = async ({ username, password }) => {
    const data = { username, password };

    const response = await api.post(`/login/`, data);
    const content = await response.data;

    if (response.status !== 201) throw new Error(content.message);

    return await content.token;
};