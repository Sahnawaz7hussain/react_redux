import axios from "axios";
import * as types from "./actionType";

const getMusicRequest = () => {
  // console.log("reqrest actio n called");
  return { type: types.GET_MUSIC_REQUEST };
};
const getMusicSuccess = (payload) => {
  // console.log("success called:", payload);
  return { type: types.GET_MUSIC_SUCCESS, payload };
};
const getMusicFailure = () => {
  // console.log("error called ::");
  return { type: types.GET_MUSIC_FAILURE };
};
export const getMusics =
  (payload = {}) =>
  (dispatch) => {
    dispatch(getMusicRequest());
    return axios
      .get("http://localhost:8080/albums", payload)
      .then((r) => {
        dispatch(getMusicSuccess(r.data));
      })
      .catch((e) => {
        dispatch(getMusicFailure());
      });
  };
