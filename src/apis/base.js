import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://54.254.134.59/api",
});
// http://54.254.134.59/api
axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers["access-token"] = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;
