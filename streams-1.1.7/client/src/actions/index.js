import streamApi from "../apis/streams";
import browserHistory from "../utility/history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const fetchStreams = () => async (dispatch) => {
  const response = await streamApi.get("/streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};
