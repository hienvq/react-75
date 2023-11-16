import axiosClient from "./base";

const getUsers = (config) => {
  return axiosClient.get(`/users`, config); // GET http://localhost:3004/user
};
const createUser = (data, config) => {
  return axiosClient.post("/users", data, config); // POST http://localhost:3004/user
};
const updateUser = (id, data, config) => {
  return axiosClient.put(`/users/${id}`, data, config); // POST http://localhost:3004/user
};
const deleteUser = (id, config) => {
  return axiosClient.delete(`/users/${id}`, config); // DELETE http://localhost:3004/user/1
};
export { getUsers, createUser, deleteUser, updateUser };

// GET http://localhost:3004/user?limit=10&offset=0&name=abc
