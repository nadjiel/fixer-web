import { api } from "../api";

export async function register ({ username, email, password, phone, picture }) {
    const data = { email, password, username, phone, picture };

    const response = await api.post(`/users/`, data);
    const content = await response.data;

    if (response.status !== 201) throw new Error(content?.message);

    return content;
};