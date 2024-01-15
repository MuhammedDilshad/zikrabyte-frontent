import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:4500" });
const API = axios.create({ baseURL: "https://zikrabyte-backend.onrender.com" });

export const getBannerData = async () => {
  try {
    const response = await API.get("/banner");
    return response.data;
  } catch (error) {
    throw error;
  }
};
