import axios from "axios";

const API_URL = "/api/users/";
const url = "http://localhost:5001/api/users/";

const register = async (userData) => {
  // const response = await axios.post(API_URL, userData);
  const response = await axios.post(url, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  // const response = await axios.post(API_URL, userData);
  const response = await axios.post(url + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
