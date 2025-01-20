import { CreateAxiosDefaults } from "axios";
import { getContentType } from "./api.helpers";
import { SERVER_URL } from "@/config/api.config";
const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: getContentType(),
  withCredentials: true,
};
