import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import { getTodos } from "../Redux/action";
const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  useEffect(() => {
    getTodos(dispatch);
  }, []);
  console.log(todos);
  return (
    <div>
      <p>Todo</p>
      <TodoInput />
      {todos.length > 0 &&
        todos.map((el) => (
          <div key={el.id}>
            {" "}
            {el.title} - {el.status ? "Done" : "Not Done"}{" "}
          </div>
        ))}
    </div>
  );
};

export default Todo;
