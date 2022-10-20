import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodos,
} from "../Redux/action";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTodo = (text) => {
    const payload = {
      title: text,
      status: false,
    };
    dispatch(addTodoRequest());
    return axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => {
        dispatch(addTodoSuccess(r.data));
        setText("");
      })
      .catch((e) => {
        dispatch(addTodoFailure());
      });
  };
  const handleAddTodo = () => {
    addTodo(text).then((r) => {
      getTodos(dispatch);
    });
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={handleAddTodo} disabled={!text} className="addButton">
        Add
      </button>
      <h3>Text: {text}</h3>
    </div>
  );
};

export default TodoInput;
