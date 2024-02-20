import axios from "axios";

export const todoClient = axios.create({
  baseURL: "http://localhost:5001/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = async () => {
  const response = await todoClient.get("/");
  return response.data;
};

export const createTodo = async (todo) => {
  const { data } = await todoClient.post("/", todo);
  return data; // return은 사실 필요 없다.
};

export const deleteTodo = async (id) => {
  await todoClient.delete(`/${id}`);
};

export const updateTodo = async (id, todo) => {
  await todoClient.patch(`/${id}`, todo);
};
