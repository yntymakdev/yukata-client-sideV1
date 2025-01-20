export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,
  home: () => PUBLIC_URL.root("/auth"),
  explorer: (query = "") => PUBLIC_URL.root(`/explorer${query}`),
  product: (id = "") => PUBLIC_URL.root(`/product/${id}`),
  review: (query = "") => PUBLIC_URL.root(`/explorer${query}`),
};
export const DASHBOARD_URL = {};
export const STORE_URL = {};
