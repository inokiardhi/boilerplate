import axios from "axios";
const todoAPI = axios.create({
  baseURL: "http://localhost:3006/todos"
});

export const todosGet = () => todoAPI.get();
export const todosPost = (payload) => todoAPI.post(payload); // payload is new object of todo
export const todoUpdate = (id, data) => todoAPI.patch(`/:${id}`,data); // data is x-www-urlEncoded form;
export const todoDelete = (id) => todoAPI.delete(`/${id}`);