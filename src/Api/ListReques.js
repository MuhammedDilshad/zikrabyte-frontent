import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:4500" });
const API = axios.create({ baseURL: "https://zikrabyte-backend.onrender.com" });

export const getListData = async () => {
  try {
    const response = await API.get("/getData");
    return response;
  } catch (error) {
    throw error;
  }
};
