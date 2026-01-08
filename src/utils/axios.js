import axios from "axios";

const api = axios.create({
  baseURL: "https://reactprojectbackend-production-f1e8.up.railway.app",
  headers: {
  },
});

export default api;
