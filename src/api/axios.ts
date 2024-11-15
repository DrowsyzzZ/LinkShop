import axios from "axios";

const instance = axios.create({
  baseURL: "https://linkshop-api.vercel.app/11-4/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
