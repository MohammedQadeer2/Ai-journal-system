import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-journal-system-backend.onrender.com/api"
});

export default API;
