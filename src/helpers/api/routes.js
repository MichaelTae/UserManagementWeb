import apiCall from "../utils/axiosConfig";

export const apiUrl = 'https://localhost:7100';


export const getAllUsers = async () => {
    const res = await apiCall('/api/Users', 'GET');
    return res.data;
}

export const getUserAges = async () => {
    const res = await apiCall('/api/Metrics/users/age', 'GET');
    return res.data;
}

export const getUserCountries = async () => {
    const res = await apiCall('/api/Metrics/users/Country', 'GET');
    return res.data;
}

export const getTotalRevenue = async () => {
    const res = await apiCall('/api/Metrics/users/Revenue/Total', 'GET');
    return res.data;
}

export const getUserGenders = async () => {
    const res = await apiCall('/api/Metrics/users/Gender', 'GET');
    return res.data;
}

export const getMetrics = async () => {
    const res = await apiCall('/api/Metrics/users', 'GET');
    return res.data;
}

export const CreateNewUser = async (user) => {
    const res = await apiCall('/api/Users', 'POST', user);
    return res.data;
}

export const UpdateUser = async (id,user) => {
    const res = await apiCall(`/api/Users/${id}`, 'PUT', user);
    return res.data;
}