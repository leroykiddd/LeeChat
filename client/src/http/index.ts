import axios from "axios";

export const baseURL: string = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
