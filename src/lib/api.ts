import axios from "axios";

import { HTTP_TIMEOUT_MS } from "@/lib/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseURL && baseURL.length > 0 ? baseURL : undefined,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: HTTP_TIMEOUT_MS,
});
