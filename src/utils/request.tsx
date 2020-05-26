import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.BASE_URL;

console.log(BASE_URL)
const getHeader = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

const getOption = (
  method: any,
  endpoint: String,
  data = {}
): AxiosRequestConfig => {
  return {
    headers: getHeader(),
    method,
    url: `${BASE_URL}/${endpoint}`,
    data,
  };
};
export default {
  get: async (endpoint: String) => {
    const options = getOption("get", endpoint);
    const response = axios.request(options);
    return response;
  },
  post: async (endpoint: String, payload: Object) => {
    const options = getOption("post", endpoint, payload);
    const response = axios.request(options);
    return response;
  },
};
