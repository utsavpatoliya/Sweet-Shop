import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/sweets", // Adjust if your backend runs elsewhere
});

export const getSweets = (params) => API.get("/", { params });
export const addSweet = (data) => API.post("/", data);
export const deleteSweet = (id) => API.delete(`/${id}`);
export const purchaseSweet = (id, quantity) => API.post(`/${id}/purchase`, { quantity });
export const restockSweet = (id, quantity) => API.post(`/${id}/restock`, { quantity }); 