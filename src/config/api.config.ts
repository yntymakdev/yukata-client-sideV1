import Auth from "@/app/auth/Auth";

export const SERVER_URL = process.env.SERVER_URL as string;

export const API_URL = {
  root: (url = "") => `${url ? url : ""}`,
  auth: (url = "") => API_URL.root(`/auth${url}`),
  user: (url = "") => API_URL.root(`/auth${url}`),
  store: (url = "") => API_URL.root(`/auth${url}`),
  product: (url = "") => API_URL.root(`/auth${url}`),
  cateogory: (url = "") => API_URL.root(`/auth${url}`),
  review: (url = "") => API_URL.root(`/auth${url}`),
  order: (url = "") => API_URL.root(`/auth${url}`),
  statistics: (url = "") => API_URL.root(`/auth${url}`),
  file: (url = "") => API_URL.root(`/auth${url}`),
};
