import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://64cbbf882eafdcdc8519400a.mockapi.io",
});

axiosClient.interceptors.request.use(
  function (config) {
    config.headers["access-token"] = "my-token";
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
