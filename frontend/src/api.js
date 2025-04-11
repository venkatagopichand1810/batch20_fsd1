import axios from "axios";

// set the base url for the backend api
const api = axios.create({
    baseURL: "https://batch20-fsd1-1.onrender.com/api",
})

export default api;