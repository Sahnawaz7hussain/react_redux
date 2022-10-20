import axios from "axios";
import * as types from "./actiontype";

export const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};
export const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};
export const getTodoFailure = () => {
  return { type: types.GET_TODO_FAILURE };
};

export const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};
export const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODO_SUCCESS, payload };
};
export const addTodoFailure = () => {
  return { type: types.ADD_TODO_FAILURE };
};
export const getTodos = (dispatch) => {
  getTodoRequest();
  axios
    .get("http://localhost:8080/todos")
    .then((r) => dispatch(getTodoSuccess(r.data)))
    .catch((e) => dispatch(getTodoFailure()));
};
