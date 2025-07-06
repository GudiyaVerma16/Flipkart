// API Configuration for different environments
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

// Create axios instance with base URL
const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  withCredentials: true,
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only redirect to login for 401 errors that aren't from /me endpoint
    // and only if it's not an admin endpoint (to avoid infinite loops)
    if (
      error.response?.status === 401 &&
      !error.config.url.includes("/me") &&
      !error.config.url.includes("/admin")
    ) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
