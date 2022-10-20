import * as types from "./actiontype";
const initState = {
  isLoading: false,
  isError: false,
  todos: [],
};
const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODO_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    case types.GET_TODO_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        todos: [],
      };
    case types.ADD_TODO_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: false,
      };
    case types.ADD_TODO_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};
export { reducer };
