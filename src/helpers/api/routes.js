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