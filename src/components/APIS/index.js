import axios from 'axios'

const USERSORDER = axios.create({ baseURL: 'https://fakestoreapi.com/products' })
export const fetchUserOrders = () => USERSORDER.get('/');
export const fetchSingleUserOrder = (id) => USERSORDER.get(`/${id}`);
export const createUserOrder = (newUserOrder) => USERSORDER.post('/', newUserOrder);
export const updateUserOrder = (id, updatedUserOrder) => USERSORDER.put(`/${id}`, updatedUserOrder);
export const deleteUserOrder = (id) => USERSORDER.delete(`/${id}`);