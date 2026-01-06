import axios from "axios";

const api = axios.create({
  baseURL: "https://reactprojectbackend-production-dbb1.up.railway.app",
  headers: {
  },
});

export default api;
