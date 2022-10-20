import * as types from "./actionType";
const initState = {
  isLoading: false,
  isError: false,
  musics: [],
};
export const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MUSIC_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_MUSIC_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        musics: payload,
      };
    case types.GET_MUSIC_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        musics: [],
      };
    default:
      return oldState;
  }
};
