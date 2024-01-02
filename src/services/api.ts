import { Constants } from "@/constants/Constants";
import axios from "axios";

export const api = axios.create({
  baseURL: Constants.url.nextApi.baseUrl,
});
