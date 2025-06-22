import axios from "axios";
import { BASE_SERVICES_URL } from "./endpoints_config";

export const apiClient = axios.create({
  baseURL: BASE_SERVICES_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});