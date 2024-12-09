import axios from "axios";
import { redirect } from "next/navigation";
import { getToken } from "../token";

export const baseIntance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
});

baseIntance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

baseIntance.interceptors.response.use((config) => {
  if (config.status === 401) redirect("/login");
  return config;
});

export const URLs = {
  register: "/register",
  login: "/login",
  products: "/products",
};
