import axios, { AxiosInstance } from "axios"

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost/3000/api",
  headers: {
    "Content-Type": "Application/json",
  }
})

export default axiosInstance