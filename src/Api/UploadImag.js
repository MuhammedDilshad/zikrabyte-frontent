import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:4500" });
const API = axios.create({ baseURL: "https://zikrabyte-backend.onrender.com" });

export const uploadImage = async (data) => {
  try {
    const response = await API.post("/upload", data);
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const uploadPost = async (data) => {
  try {
    const response = await API.post("/postData", data);
  } catch (error) {
    console.error("Error uploading post data:", error);
    throw error;
  }
};
